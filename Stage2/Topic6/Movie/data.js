const getMovie = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isSuccess = true;

    const movieData = {
      message: 'Ok',
      data: [
        {
          id: 670,
          title: 'The Call of the Wild',
          cover_url:
            'https://img.fullhdfilmizlesene.live/cover/izle-lg/vahsetin-cagrisi-fh3-13127.webp',
          fragman: 'https://www.youtube.com/watch?v=5P8R2zAhEwg',
          watch_url:
            'https://www.fullhdfilmizlesene.live/film/vahsetin-cagrisi-2/',
          adult: false,
          run_time_min: 100,
          imdb: '6.7',
          overview: 'In',
          created_at: '2026-03-13T20:26:53.027Z',
          category: {
            id: 374,
            name: 'Family',
          },
        },
        {
          id: 669,
          title: 'Anaconda',
          cover_url:
            'https://i0.wp.com/thecelluloidcorrespondent.com/wp-content/uploads/2025/12/image-31.png?fit=980%2C600&ssl=1',
          fragman: 'https://www.youtube.com/watch?v=az8M5Mai0X4',
          watch_url: 'https://www.fullhdfilmizlesene.live/film/anakonda-2/',
          adult: false,
          run_time_min: 99,
          imdb: '6.0',
          overview:
            'Doug and Griff have dreamed for years of remaking their favorite film, Anaconda. Neither of them is young anymore; the routine of life, the weight of work, and the quiet anxieties of middle age are at their door. Just at this moment, they find a way out: to actually make the remake they have always imagined. It may sound crazy, but they grab their cameras and their courage and set out on the journey.',
          created_at: '2026-03-13T20:18:01.169Z',
          category: {
            id: 351,
            name: 'Comedy',
          },
        },
        {
          id: 659,
          title: "Tom Clancy's Without Remorse",
          cover_url:
            'https://www.avforums.com/styles/avf/editorial/block//40418c4695bc5ebacd0e3aa1e1ec2309_3x3.jpg',
          fragman:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/WwmdKQ5JL_E?si=ixqdfjMHUAywdioY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          watch_url:
            'https://filmania.net/film/tom-clancys-without-remorse-fh1-izle',
          adult: true,
          run_time_min: 109,
          imdb: '9.4',
          overview:
            'Without Remorse tells a mysterious story of revenge that opens the doors to the dark past of John Kelly. Brought to life by the powerful performance of Michael B. Jordan, Kelly faces a dangerous world during a covert mission and suffers devastating losses. When his pregnant wife is brutally murdered, a burning desire for revenge begins to grow inside him.',
          created_at: '2026-03-06T21:09:48.143Z',
          category: {
            id: 437,
            name: 'War',
          },
        },
        {
          id: 658,
          title: 'Blood Brothers: Bara Naga',
          cover_url:
            'https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZ-cgxNO3G6TyalsKc60qvVrbIPmfDXwyqUdiG_G_nBfzLAKCGtualyvaVgeKdx4Zt8x91AAr5ALwyrNu5mzx4pv820zBeCCzk9D.jpg?r=503',
          fragman: 'https://www.youtube.com/watch?v=q3OQlAbKP2E',
          watch_url:
            'https://filmania.net/film/blood-brothers-bara-naga-2-izle',
          adult: false,
          run_time_min: 129,
          imdb: '9.8',
          overview:
            'A tightly bonded team of friends works for a prestigious security company that serves the city’s underground world. Their solidarity is symbolized through shared jokes, deep camaraderie, and even matching tattoos. However, this strong friendship begins to crumble when the dark shadow of betrayal falls upon them. One of them secretly leaks information against the group, turning everything upside down. As a result, the team becomes a target for their own bosses while deep cracks begin to form within their relationships.',
          created_at: '2026-03-06T21:04:07.400Z',
          category: {
            id: 384,
            name: 'Drama',
          },
        },
        {
          id: 657,
          title: 'Black Water: Abyss',
          cover_url:
            'https://d32qys9a6wm9no.cloudfront.net/images/movies/backdrop/f8/2cfc8a78039ecfa24d74f14872217652_original.jpg?t=1636148895',
          fragman: 'https://www.youtube.com/watch?v=cIbRs6jwU_c',
          watch_url:
            'https://www.fullhdfilmizlesene.live/film/black-water-abyss/',
          adult: false,
          run_time_min: 98,
          imdb: '4.6',
          overview:
            'A group of adventurous friends were eager for the thrill of diving into the heart of the wild nature of Northern Australia. What they had planned as a simple weekend getaway led them to explore a mysterious cave that no one had set foot in before.',
          created_at: '2026-03-06T20:52:49.222Z',
          category: {
            id: 439,
            name: 'Horror',
          },
        },
        {
          id: 577,
          title: 'Zootopia 2',
          cover_url:
            'https://images.justwatch.com/poster/338795144/s718/zootopia-2.jpg',
          fragman: 'https://www.youtube.com/watch?v=BjkIOU5PhyQ',
          watch_url: 'https://www.fullhdfilmizlesene.live/film/zootopia-2-1/',
          adult: false,
          run_time_min: 147,
          imdb: '5.6',
          overview:
            'Zootopia’s energy is soaring once again, as the city becomes the stage for chaos sparked by an unexpected visitor. Detective Judy Hopps, with her unshakable courage, teams up with former sly con artist—now her police partner—Nick Wilde to track down a mysterious reptile that is turning the mammal metropolis upside down.',
          created_at: '2026-03-01T12:14:34.520Z',
          category: {
            id: 389,
            name: 'Animation',
          },
        },
        {
          id: 576,
          title: 'Ice Road: Vengeance',
          cover_url:
            'https://img.fullhdfilmizlesene.live/poster/izle-lg/buz-yolu-intikam-ice-road-vengeance-91333.webp',
          fragman:
            'https://www.google.com/search?sa=X&sca_esv=a8c2cf8f9af28510&sxsrf=ANbL-n5svZEJBL89TnoHz5P0mNkLkIsMlg:1772366866644&udm=7&fbs=ADc_l-Yk7dC9rTocjjwI5T_IO7ZXgdRLhUG8pk-pM063RkPlLQJoVswXu7Xoldd5UH6fMIq_s9nb4YoXhm4SVUwIynGO-EpI1wixZIXIgbExXUlKx1eiKO9Z6NaSNd3etcMMpnzS1PEYpHbgSyVSY_xLMl3K9ieKNtmhh9-AiFR2FYs3YoqIv4zCFxpByO8dH6dY7v_hxQkvyDRzEY5hsBPerqNjPeRIsw&q=Ice+Road:+Vengeance&ved=2ahUKEwiNxf2L1f6SAxVmCBAIHYMyLNoQtKgLegQIDBAB&biw=1960&bih=1109&dpr=1.5#fpstate=ive&vld=cid:c1a6921a,vid:K6lJh9ADfbQ,st:0',
          watch_url:
            'https://www.fullhdfilmizlesene.live/film/buz-yolu-intikam/',
          adult: false,
          run_time_min: 112,
          imdb: '4.8',
          overview:
            'Ice road driver Mike McCann travels to Nepal to deliver his late brother’s ashes to Mount Everest and sets foot on the “Sky Road” at 12,000 feet. As he navigates narrow, rocky passes aboard a crowded tour bus, he and a local mountain guide are ambushed by armed mercenaries. Amid thinning air, sudden weather shifts, and sheer cliff edges, Mike must protect the innocent passengers while also defending the local villagers’ land. Turning his grief into a mission, this journey becomes not only a ritual of farewell, but a relentless test of survival.',
          created_at: '2026-03-01T12:08:24.310Z',
          category: {
            id: 392,
            name: 'Action',
          },
        },
        {
          id: 575,
          title: 'Jurassic World: Rebirth',
          cover_url:
            'https://img.fullhdfilmizlesene.live/cover/izle-lg/jurassic-world-yeniden-dogus-jurassic-world-rebirth-23025.webp',
          fragman: 'https://www.youtube.com/watch?v=jan5CFWs9ic',
          watch_url:
            'https://www.fullhdfilmizlesene.live/film/jurassic-world-yeniden-dogus/',
          adult: false,
          run_time_min: 134,
          imdb: '6.4',
          overview:
            '"Jurassic World: Dominion" takes us back into the world of dinosaurs, delivering a breathtaking and action-packed adventure. The film explores the struggle of dinosaurs to survive and examines humanity’s complex relationship with these colossal creatures. Five years after the previous events, the world is no longer as hospitable for dinosaurs as it once was. These giant beings have retreated to the tropical regions where they once ruled.',
          created_at: '2026-03-01T11:38:32.924Z',
          category: {
            id: 398,
            name: 'Fiction',
          },
        },
        {
          id: 574,
          title: 'Avatar: Fire and Ash',
          cover_url:
            'https://preview.redd.it/avatar-fire-and-ash-fan-made-poster-v0-klk67u2xhuff1.png?width=1080&crop=smart&auto=webp&s=48d96bb271bbe6de49a778b89ad9ef4847f60e72',
          fragman:
            'https://www.youtube.com/embed/nb_fFj_0rq8?rel=0&modestbranding=1&enablejsapi=1',
          watch_url:
            'https://www.fullhdfilmizlesene.live/film/avatar-ates-ve-kul-1/',
          adult: false,
          run_time_min: 192,
          imdb: '7.4',
          overview:
            'For those who couldn’t forget the enchanted forests of Pandora the first time, the adventure returns—this time with the heat of fire. The director’s insistence on delivering a visual spectacle once again pays off; new regions painted in shades of red and orange practically lock the audience to the screen. Throughout the film, Jake Sully and Neytiri’s protective instincts as parents open the door not only to a family drama, but also to an ecological battle against humanity’s relentless greed.',
          created_at: '2026-03-01T11:26:41.348Z',
          category: {
            id: 390,
            name: 'Fantasyh',
          },
        },
        {
          id: 546,
          title: 'The Social Network',
          cover_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmBWibkAMkAtsOqwtNXybQ_YhjVwtLzRpdROroT0Nk0X1DseOvGbEiQeldlXTcqyfBgfxzacRTesaYTBt6cUM3argbakQHcU6eXAQsKoEq&s=10',
          fragman: 'https://www.youtube.com/watch?v=lB95KLmpLR4',
          watch_url: 'https://www.hdfilmcehennemi.nl/the-social-network-7/',
          adult: true,
          run_time_min: 121,
          imdb: '7.8',
          overview:
            'Harvard tələbəsi Mark Zuckerberg sosial şəbəkə platforması yaratdıqdan sonra qısa müddətdə qlobal uğur qazanır. Film Facebook-un yaranma prosesini, hüquqi mübahisələri və dostluq münasibətlərinin necə pozulduğunu dramatik şəkildə təqdim edir.',
          created_at: '2026-02-27T06:56:08.538Z',
          category: {
            id: 400,
            name: 'Biography',
          },
        },
        {
          id: 540,
          title: 'Shutter Island',
          cover_url:
            'https://image.tmdb.org/t/p/w500/kve20tXwUZpu4GUX8l6X7Z4jmL6.jpg',
          fragman: 'https://youtu.be/eDIphEz4RbQ?si=lJ-IKPdkiANyx367',
          watch_url: 'https://www.hdfilmizle.to/zindan-adasi-izle/',
          adult: false,
          run_time_min: 138,
          imdb: '8.2',
          overview:
            'Hadisələr 1954-cü ildə baş verir. ABŞ marşalı Teddy Daniels sirli şəkildə yoxa çıxmış bir qadın xəstəni tapmaq üçün ruhi xəstələrin saxlanıldığı bir adaya – Ashecliffe xəstəxanasına göndərilir. Araşdırma zamanı ada və xəstəxana haqqında qəribə detallar ortaya çıxır.\nTeddy araşdırmanı davam etdirdikcə həm ada ilə bağlı sirlər, həm də öz keçmişində yaşadığı travmalar üzə çıxmağa başlayır. Film boyunca izləyici reallıq ilə illüziya arasında qalır.',
          created_at: '2026-02-26T10:10:14.882Z',
          category: {
            id: 98,
            name: 'Triller',
          },
        },
        {
          id: 529,
          title: 'Venom: The Last Dance',
          cover_url:
            'https://amc-theatres-res.cloudinary.com/image/upload/v1580221083/amc-cdn/general/ecb0bbc7-d68a-49be-8fda-25114f97f8a5/AMCPromo_venom-2.jpg',
          fragman:
            'https://www.youtube.com/embed/__2bjWbetsA?rel=0&modestbranding=1&enablejsapi=1',
          watch_url:
            'https://www.fullhdfilmizlesene.live/film/venom-3-son-dans/',
          adult: true,
          run_time_min: 109,
          imdb: '6.5',
          overview:
            'Venom: The Last Dance (2024) is the final film in the trilogy, featuring Tom Hardy returning as Eddie Brock and his symbiote partner. On the run from both human military forces (Imperium) and alien creatures (Xenophages) sent by their creator, Knull, the duo must make a "devastating decision',
          created_at: '2026-02-24T22:08:26.836Z',
          category: {
            id: 390,
            name: 'Fantasyh',
          },
        },
        {
          id: 527,
          title: 'Predator: Badlands 2025',
          cover_url:
            'https://wherestridesthebehemoth.wordpress.com/wp-content/uploads/2025/12/predator-badlands.jpeg',
          fragman:
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/43R9l7EkJwE?si=Mdab9fq446jbCmWW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
          watch_url:
            'https://www.hdfilmcehennemi.page/film/predator-vahsi-topraklar-izle-7/',
          adult: true,
          run_time_min: 107,
          imdb: '7.2',
          overview:
            'Predator: Badlands is a 2025 sci-fi action film directed by Dan Trachtenberg, releasing on November 7, 2025. As the seventh Predator installment, it stars Elle Fanning and Dimitrius Schuster-Koloamatangi, focusing on a young Yautja (Predator) who alliances with a human/android to survive a hostile planet',
          created_at: '2026-02-24T21:44:19.523Z',
          category: {
            id: 352,
            name: 'Sci-Fi',
          },
        },
        {
          id: 486,
          title: 'The Call',
          cover_url:
            'https://static.tvtropes.org/pmwiki/pub/images/the_call_2013.jpg',
          fragman: 'https://www.youtube.com/watch?v=H77kttELZT8',
          watch_url: 'https://yabancidizi.so/film/telefon',
          adult: true,
          run_time_min: 121,
          imdb: '7.5',
          overview:
            'Jordan, a 911 operator, has years of experience. When a call goes bad, she begins to doubt herself. She gets a chance to redeem herself when a girl is kidnapped. Now, Jordan must use all her cunning.',
          created_at: '2025-11-05T20:34:18.176Z',
          category: {
            id: 98,
            name: 'Triller',
          },
        },
      ],
      result: true,
    };

    const movieErrorData = {
      message: 'Film melumatlarini istifade ucun giris etmelisiniz!',
      result: false,
      data: null,
    };

    if (isSuccess) {
      resolve(movieData);
    } else {
      reject(movieErrorData);
    }
  }, 2000);
});
