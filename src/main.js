import { createApp } from 'vue'
import App from './App.vue'



//

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faTwitter,faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret,faTwitter,faGithub,faLinkedin)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')