const fakeData = [
    {
        title: 'Standard Single Room',
        id:100,
        description: 'Standard Single Rooms are designed in open -concept living area and have many facilities.',
        imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-presidential-suite-living-room-4-hero.jpg',
        bed: 1,
        capacity: 1,
        bedType: 'Single',
        avatar: 'S',
        price: 119,
        detailsDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quas quidem praesentium, reprehenderit possimus, voluptate inventore atque ex autem rem harum numquam, aspernatur tenetur labore accusantium! Nihil, perspiciatis cum voluptatum facilis eius soluta magnam consequatur mollitia saepe unde. Tenetur voluptate eos quasi, veniam error voluptates. Reprehenderit, temporibus. Ad quasi eos asperiores velit consectetur eius sed delectus? Nobis asperiores assumenda iure commodi incidunt, unde placeat necessitatibus soluta harum dolores? Doloremque omnis assumenda provident dolorem laborum inventore, eum alias nulla dolorum nisi!'
    },
    {
        title: 'Couple Power Room',
        id:101,
        description: 'Superior Double Rooms are perfectly equipped for traveling couples or friends.',
        imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/offers/offer-images/burj-al-arab-royal-suite-staircase-5-hero.jpg',
        bed: 1,
        capacity: 2,
        bedType: 'Double',
        avatar: 'D',
        price: 149,
        detailsDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quas quidem praesentium, reprehenderit possimus, voluptate inventore atque ex autem rem harum numquam, aspernatur tenetur labore accusantium! Nihil, perspiciatis cum voluptatum facilis eius soluta magnam consequatur mollitia saepe unde. Tenetur voluptate eos quasi, veniam error voluptates. Reprehenderit, temporibus. Ad quasi eos asperiores velit consectetur eius sed delectus? Nobis asperiores assumenda iure commodi incidunt, unde placeat necessitatibus soluta harum dolores? Doloremque omnis assumenda provident dolorem laborum inventore, eum alias nulla dolorum nisi!'
    },
    {
        title: 'Family Capacity Room',
        id:102,
        description: ' Have lots of in-room facilities and are designed in open-concept living area.',
        imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/presidential-two-bedroom-suite/burj-al-arab-presidential-suite-guest-bedroom_6-4_landscape/burj-al-arab-presidential-suite-guest-bedroom_16-9_landscape.jpg?w=2080',
        bed: 2,
        capacity: 4,
        bedType: 'Family',
        avatar: 'F',
        price: 199,
        detailsDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quas quidem praesentium, reprehenderit possimus, voluptate inventore atque ex autem rem harum numquam, aspernatur tenetur labore accusantium! Nihil, perspiciatis cum voluptatum facilis eius soluta magnam consequatur mollitia saepe unde. Tenetur voluptate eos quasi, veniam error voluptates. Reprehenderit, temporibus. Ad quasi eos asperiores velit consectetur eius sed delectus? Nobis asperiores assumenda iure commodi incidunt, unde placeat necessitatibus soluta harum dolores? Doloremque omnis assumenda provident dolorem laborum inventore, eum alias nulla dolorum nisi!'
    },
    {
        title: 'Work Room Single',
        id:103,
        description: ' Have lots of in-room facilities and are designed in open-concept living area.',
        imgUrl: 'https://emporium-spa.com/uploads/container_user_files/locations/burj-al-arab-jumeirah/rooms-images/diplomatic-three-bedroom-suite/29628618889-54190147999.jpg',
        bed: 2,
        capacity: 4,
        bedType: 'Family',
        avatar: 'F',
        price: 199,
        detailsDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quas quidem praesentium, reprehenderit possimus, voluptate inventore atque ex autem rem harum numquam, aspernatur tenetur labore accusantium! Nihil, perspiciatis cum voluptatum facilis eius soluta magnam consequatur mollitia saepe unde. Tenetur voluptate eos quasi, veniam error voluptates. Reprehenderit, temporibus. Ad quasi eos asperiores velit consectetur eius sed delectus? Nobis asperiores assumenda iure commodi incidunt, unde placeat necessitatibus soluta harum dolores? Doloremque omnis assumenda provident dolorem laborum inventore, eum alias nulla dolorum nisi!'
    },

    {
        title: 'Burj Al Arab Jumeirah Facilities',
        id:103,
        description: ' Have lots of in-room facilities and are designed in open-concept living area.',
        imgUrl: 'https://media.dertouristik.com/exports/KuoniUK/ImageGalleryLightboxLarge/454325_ImageGalleryLightboxLarge.jpg',
        bed: 2,
        capacity: 4,
        bedType: 'Family',
        avatar: 'F',
        price: 199,
        detailsDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quas quidem praesentium, reprehenderit possimus, voluptate inventore atque ex autem rem harum numquam, aspernatur tenetur labore accusantium! Nihil, perspiciatis cum voluptatum facilis eius soluta magnam consequatur mollitia saepe unde. Tenetur voluptate eos quasi, veniam error voluptates. Reprehenderit, temporibus. Ad quasi eos asperiores velit consectetur eius sed delectus? Nobis asperiores assumenda iure commodi incidunt, unde placeat necessitatibus soluta harum dolores? Doloremque omnis assumenda provident dolorem laborum inventore, eum alias nulla dolorum nisi!'
    },

    {
        title: '  Burj Al-Arab Hotel Terrace Bluetech Finland',
        id:103,
        description: ' Have lots of in-room facilities and are designed in open-concept living area.',
        imgUrl: 'https://i.ytimg.com/vi/qvFTqAX2eDs/maxresdefault.jpg',
        bed: 2,
        capacity: 4,
        bedType: 'Family',
        avatar: 'F',
        price: 199,
        detailsDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quas quidem praesentium, reprehenderit possimus, voluptate inventore atque ex autem rem harum numquam, aspernatur tenetur labore accusantium! Nihil, perspiciatis cum voluptatum facilis eius soluta magnam consequatur mollitia saepe unde. Tenetur voluptate eos quasi, veniam error voluptates. Reprehenderit, temporibus. Ad quasi eos asperiores velit consectetur eius sed delectus? Nobis asperiores assumenda iure commodi incidunt, unde placeat necessitatibus soluta harum dolores? Doloremque omnis assumenda provident dolorem laborum inventore, eum alias nulla dolorum nisi!'
    },

  

    {
        title: 'Burj Al Arab Jumeirah-Dubai Hotel Dubai',
        id:103,
        description: ' Have lots of in-room facilities and are designed in open-concept living area.',
        imgUrl: 'http://secure.s.forbestravelguide.com/img/properties/burj-al-arab-jumeirah/burj-al-arab-jumeirah-one-bedroom-deluxe.jpg',
        bed: 2,
        capacity: 4,
        bedType: 'Family',
        avatar: 'F',
        price: 199,
        detailsDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quas quidem praesentium, reprehenderit possimus, voluptate inventore atque ex autem rem harum numquam, aspernatur tenetur labore accusantium! Nihil, perspiciatis cum voluptatum facilis eius soluta magnam consequatur mollitia saepe unde. Tenetur voluptate eos quasi, veniam error voluptates. Reprehenderit, temporibus. Ad quasi eos asperiores velit consectetur eius sed delectus? Nobis asperiores assumenda iure commodi incidunt, unde placeat necessitatibus soluta harum dolores? Doloremque omnis assumenda provident dolorem laborum inventore, eum alias nulla dolorum nisi!'
    },




    {
        title: 'Deluxe Marina Suite',
        id:103,
        description: ' Have lots of in-room facilities and are designed in open-concept living area.',
        imgUrl: 'https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/room/deluxe-suite/burj-al-arab-1-bedroom-suite_6-4_landscape.jpg?h=1080&w=1620',
        bed: 2,
        capacity: 4,
        bedType: 'Family',
        avatar: 'F',
        price: 199,
        detailsDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quas quidem praesentium, reprehenderit possimus, voluptate inventore atque ex autem rem harum numquam, aspernatur tenetur labore accusantium! Nihil, perspiciatis cum voluptatum facilis eius soluta magnam consequatur mollitia saepe unde. Tenetur voluptate eos quasi, veniam error voluptates. Reprehenderit, temporibus. Ad quasi eos asperiores velit consectetur eius sed delectus? Nobis asperiores assumenda iure commodi incidunt, unde placeat necessitatibus soluta harum dolores? Doloremque omnis assumenda provident dolorem laborum inventore, eum alias nulla dolorum nisi!'
    },




    
]
export default fakeData;