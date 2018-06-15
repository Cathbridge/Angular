
import { ViewComponent } from './app/components/view/view.component';
import {BookingComponent} from './app/components/booking/booking.component'
import { DetailPageComponent  } from "./app/components/detail-page/detail-page.component";
import { EventComponent } from "./app/components/event/event.component";




export const AppRoutes = [
    { path : '', component:BookingComponent 

} ,

    {path: 'detail',component: DetailPageComponent, children:[
        {
            path : 'event', component: EventComponent
        },
        { path : 'view', component: ViewComponent

    } ,
    ] }

]