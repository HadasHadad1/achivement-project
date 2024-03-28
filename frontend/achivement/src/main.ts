import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
// registerLicense('ORg4AjUWIQA/Gnt2UFhhQlJBfVtdXGRWfFN0QXNYf1Rwd19FYUwxOX1dQl9nSX1Rd0RnXH9ccH1VQGg=');
//registerLicense('ORg4AjUWIQA/Gnt2UFhhQlJBfVtdXGRWfFN0QXNYf1Rwd19FYUwxOX1dQl9nSX1Rd0RnXHlcdnRTQmg=');
// registerLicense('ORg4AjUWIQA/Gnt2UFhhQlJBfVtdXGRWfFN0QXNYf1Rwd19FYUwxOX1dQl9nSX1Rd0RnXHdbcH1dT2E=');
registerLicense('ORg4AjUWIQA/Gnt2UFhhQlJBfVtdXGRWfFN0QXNYf1Rwd19FYUwxOX1dQl9nSX1Rd0RmW3dddH1QT2I=');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
