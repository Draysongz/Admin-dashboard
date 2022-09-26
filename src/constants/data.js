import images from "./images"

const data = {
    user: {
        name: 'Dray',
        img: images.avt
    },
    summary: [
        {
            title: 'Registrations',
            subtitle: 'Total students registration',
            value: '20',
            percent: 20
        },
        {
            title: "Student's progress",
            subtitle: 'progress of students',
            value: '40%',
            percent: 40
        },
        {
            title: 'Duration',
            subtitle: 'The duration of the course',
            value: '4 out of 6 months',
            percent: 66
        },
        {
            title: 'Visits',
            subtitle: 'Total visits today',
            value: '145',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Revenue',
        value: '$678',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '4',
            title: 'Courses'
        },
        {
            value: '1000',
            title: 'Users'
        },
        {
            value: '10',
            title: 'Tutors'
        },
        {
            value: '1000',
            title: 'Visits'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data