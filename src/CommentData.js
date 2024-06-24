import { faker } from '@faker-js/faker';

// Inisialisasi array Comments dengan data dummy
export const Comments = [
    {
        name: faker.name.firstName(),
        date: 'Today at 5:42PM',
        text: faker.lorem.words(8),
        avatar: faker.image.avatar()
    },
    {
        name: faker.name.firstName(),
        date: 'Yesterday at 12:30AM',
        text: faker.lorem.words(10),
        avatar: faker.image.avatar()
    },
    {
        name: faker.name.firstName(),
        date: 'Today at 10:50PM',
        text: faker.lorem.words(6),
        avatar: faker.image.avatar()
    },
   
];
// Data manual yang ingin ditambahkan
Comments.push({
    name: 'Amoi',
    date: 'Today at 10:50PM',
    text: 'Be your own kind of beautiful.',
    avatar: 'https://cdn2.iconfinder.com/data/icons/circle-avatars-1/128/050_girl_avatar_profile_woman_suit_student_officer-512.png'
}, 
{
    name: 'Qinthara',
    date: 'Yesterday at 12:30AM',
    text: 'Stay focused and never give up.',
    avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719100800&semt=sph'
}, 
    {
        name: 'Qila',
        date: 'Yesterday at 12:30AM',
        text: 'Good Job',
        avatar: 'https://img.lovepik.com/free-png/20210923/lovepik-cute-girl-avatar-png-image_401231841_wh1200.png'
});
// Menambahkan newComment ke array Comments


export default Comments;
