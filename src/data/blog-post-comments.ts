import {PostCommentsList} from '../app/shared/interfaces/post-comments-list';

export const postComments: PostCommentsList = {
    count: 6,
    items: [
        {
            avatar: 'assets/images/avatars/avatar-1',
            author: 'Robert Frost',
            date: 'November 13, 2019',
            text: 'Aliquam ornare convallis leo, vitae vehicula libero ultrices et. Curabitur sit amet ipsum condimentum, ' +
                'faucibus ante placerat, tincidunt nunc. Proin nec sem eget ex malesuada dapibus.',
            children: [
                {
                    avatar: 'assets/images/avatars/avatar-2',
                    author: 'John Masefield',
                    date: 'December 12, 2019',
                    text: 'Aliquam ornare convallis leo, vitae vehicula libero ultrices et. Curabitur sit amet ipsum condimentum,' +
                        ' faucibus ante placerat, tincidunt nunc. Proin nec sem eget ex malesuada dapibus.'
                },
                {
                    avatar: 'assets/images/avatars/avatar-3',
                    author: 'Robert Burns',
                    date: 'December 11, 2019',
                    text: 'Aliquam ornare convallis leo, vitae vehicula libero ultrices et. Curabitur sit amet ipsum condimentum,' +
                        ' faucibus ante placerat, tincidunt nunc. Proin nec sem eget ex malesuada dapibus.'
                },
                {
                    avatar: 'assets/images/avatars/avatar-4',
                    author: 'Jack London',
                    date: 'December 21, 2019',
                    text: 'Aliquam ornare convallis leo, vitae vehicula libero ultrices et. Curabitur sit amet ipsum condimentum,' +
                        ' faucibus ante placerat, tincidunt nunc. Proin nec sem eget ex malesuada dapibus.'
                },
                {
                    avatar: 'assets/images/avatars/avatar-5',
                    author: 'Charles Dickens',
                    date: 'December 30, 2019',
                    text: 'Aliquam ornare convallis leo, vitae vehicula libero ultrices et. Curabitur sit amet ipsum condimentum,' +
                        ' faucibus ante placerat, tincidunt nunc. Proin nec sem eget ex malesuada dapibus.'
                }
            ]
        },
        {
            avatar: 'assets/images/avatars/avatar-4',
            author: 'Ambrose Bierce',
            date: 'December 19, 2019',
            text: 'Integer volutpat posuere urna eu auctor.'
        }
    ]
};
