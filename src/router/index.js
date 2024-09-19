import { createRouter, createWebHistory } from 'vue-router';

import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Artwork from "@/views/Artwork.vue";
import Drawing from "@/views/artwork/Drawing.vue";
import Made from "@/views/artwork/Made.vue";
import Tattoo from "@/views/Tattoo.vue";
import BlackWork from "@/views/tattoo/BlackWork.vue";
import BlackAndGrey from "@/views/tattoo/BlackAndGrey.vue";
import Mini from "@/views/tattoo/Mini.vue";
import Uv from "@/views/tattoo/Uv.vue";
import Appointment from "@/views/Appointment.vue";
import Illust from "@/views/tattoo/Illust.vue";

const routes = [
    { path : '/', name : 'HomePage', component: Home },
    { path : '/about', name : 'AboutPage', component: About },
    {
        path : '/artwork',
        name : 'ArtworkLayout',
        component: Artwork,
        children : [
            { path: 'drawing', name: 'DrawingPage', component: Drawing },
            { path: 'made', name: 'MadePage', component: Made },
        ],
    },
    {
        path: '/tattoo',
        name: 'TattooLayout',
        component: Tattoo,
        children: [
            {path: 'illust', name: 'IllustPage', component: Illust},
            {path: 'blackwork', name: 'BlackWorkPage', component: BlackWork},
            {path: 'blackandgrey', name: 'BlackAndGreyPage', component: BlackAndGrey},
            {path: 'mini', name: 'MiniPage', component: Mini},
            {path: 'uv', name: 'UvPage', component: Uv},
        ]
    },
    { path : '/appointment', name : 'AppointmentPage', component: Appointment},
    { path : '/contact', name : 'ContactPage', component: Contact },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;