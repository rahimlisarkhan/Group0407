import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { crtBlogId } from '../services/blog.api';
import { Layout } from '../../../shared/components/Layout';
import { Input } from '../../../shared/components/Input';
import { Textarea } from '../../../shared/components/Textarea';
import { Button } from '../../../shared/components/Button';
import { ErrorMessage } from '../../../shared/components/ErrorMessage';
import { SuccessMessage } from '../../../shared/components/SuccessMessage';
import styles from './BlogCreate.module.css';

const initialValues = {
  title: '',
  body: '',
};

// validate — errors obyekti qaytarır, boşdursa form valid sayılır
const validate = (values) => {
  const errors = {};

  if (!values.title.trim()) {
    errors.title = 'Başlıq mütləqdir';
  } else if (values.title.trim().length < 3) {
    errors.title = 'Başlıq ən az 3 simvol olmalıdır';
  }

  if (!values.body.trim()) {
    errors.body = 'Mətn mütləqdir';
  } else if (values.body.trim().length < 10) {
    errors.body = 'Mətn ən az 10 simvol olmalıdır';
  }

  return errors;
};

export const BlogCreate = () => {
  const navigate = useNavigate();
  const [submitError, setSubmitError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const onSubmit = async (values) => {
    setSubmitError('');

    const response = await crtBlogId(values);

    if (response.result) {
      // Əvvəl info göstər, 1.5 saniyə sonra geri qayıt
      setSuccessMsg('Blog uğurla yaradıldı!');
      setTimeout(() => navigate(-1), 1500);
      return;
    }

    setSubmitError('Blog yaradılarkən xəta baş verdi');
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
  } = formik;

  return (
    <Layout title="Blog yarat">
      <div className={styles.form}>
        <Input
          label="Başlıq"
          name="title"
          placeholder="Blogun başlığı"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.title && errors.title}
        />

        <Textarea
          label="Mətn"
          name="body"
          placeholder="Blogun mətni"
          value={values.body}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.body && errors.body}
        />

        <ErrorMessage message={submitError} />
        <SuccessMessage message={successMsg} />

        <div className={styles.actions}>
          <Button variant="outline" onClick={() => navigate(-1)}>
            Ləğv et
          </Button>
          {/* form tag yoxdur — submit-i birbaşa handleSubmit ilə çağırırıq */}
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || !!successMsg}>
            {isSubmitting ? 'Göndərilir...' : 'Yarat'}
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default BlogCreate;
