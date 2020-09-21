export default {
    classes: [
        { id: 'cls1', name: 'Class 1' },
        { id: 'cls2', name: 'Class 2' },
        { id: 'cls3', name: 'Class 3' },
        { id: 'cls4', name: 'Class 4' },
        { id: 'cls5', name: 'Class 5' },
        { id: 'cls6', name: 'Class 6' },
        { id: 'cls7', name: 'Class 7' },
        { id: 'cls8', name: 'Class 8' },
        { id: 'cls9', name: 'Class 9' },
        { id: 'cls10', name: 'Class 10' },
    ],
    subjects: [
        { id: 'sub1', title: 'English' },
        { id: 'sub2', title: 'Urdu' },
        { id: 'sub3', title: 'Mathematics' },
        { id: 'sub4', title: 'Sindhi' },
        { id: 'sub5', title: 'Chemistry' },
        { id: 'sub6', title: 'Physics' },
        { id: 'sub7', title: 'Computer' },
        { id: 'suball1', title: 'All subjects' },
    ],
    users: [
        {
            id: 'usr1',
            name: 'Zain Ahmed',
            email: 'zain@gmail.com',
            password: '123',
            age: 24,
            education: 'MCS (masters in computer Science)',
            experice: '2 years',
            isBlocked: false,
            isApproved: true,
            address: '363 usmania colony nazimabad no 1',
            cnic: '4210160639860',
            certification: [
                { id: 'crt1', title: 'ACCP pro' }
            ]
        }
    ],
    posts: [
        {
            id: 'pst1',
            user: 'usr1',
            classes: 'cls10',
            subjects: 'suball1',
            discription: 'Hi i am avaliable for tutor from 8pm to 10pm on weeks days.',
        }
    ]

}