import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AOS from 'aos';
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
.then(() => {
  AOS.init();
})
  .catch(err => console.error(err));
