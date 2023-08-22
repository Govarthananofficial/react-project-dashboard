import images from "./images"

const data = {
    user: {
        name: 'GK Kitchen',
        img: images.avt
    },
    summary: [
        {
            title: 'Sales',
            subtitle: 'Total sales today',
            value: 'Rs:22,258',
            percent: 70
        },
        {
            title: 'Orders',
            subtitle: 'Total orders today',
            value: '258',
            percent: 49
        },
        {
            title: 'Revenue',
            subtitle: 'Total revenue today',
            value: 'Rs:41,434',
            percent: 38
        },
        {
            title: 'Swiggy',
            subtitle: 'Total Swiggy orders today',
            value: '234',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Revenue',
        value: 'Rs:41,434',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '258',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: 'Rs:41,434',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'Delivery Orders',
            value: 40
        },
        {
            title: 'Swiggy Orders',
            value: 60
        },
        {
            title: 'Zomato',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 200, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data