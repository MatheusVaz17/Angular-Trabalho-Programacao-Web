import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { ContadorComponent } from './app/contador/contador';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
