// Class adlarını birləşdirir, false/null/undefined/'' dəyərlərini atır
// cls('a', isActive && 'b', null) → 'a b' (isActive false olsa → 'a')
export const cls = (...classes) => classes.filter(Boolean).join(' ');
