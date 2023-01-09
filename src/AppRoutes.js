import {Home} from './comp/Home'
import {About} from './comp/About'
import {Contact} from './comp/Contact'
import {Cv} from './comp/Cv'

import {DrieTwintig} from './comp/DrieTwintig'
import {TweeTwintig} from './comp/TweeTwintig'



const AppRoutes = [
    {
        index: true,
        element: <Home/>
    },
    {
        path: '/2023',
        element: <DrieTwintig />
    },
    {
        path: '/2022',
        element: <TweeTwintig />
    },
    {
        path: '/About',
        element: <About />
    },
    {
        path: '/Contact',
        element: <Contact />
    },
    {
        path: '/CV',
        element: <Cv />
    },
];

export default AppRoutes;