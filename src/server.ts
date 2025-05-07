import 'zone.js/node';
import { ngExpressEngine } from '@nguniversal/express-engine';
import express from 'express';
import { existsSync } from 'fs';
import { join } from 'path';
import { AppServerModule } from './main.server';

const app = express();
const distFolder = join(process.cwd(), 'dist/your-project-name/browser');
const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

app.engine('html', ngExpressEngine({ bootstrap: AppServerModule }));
app.set('view engine', 'html');
app.set('views', distFolder);

app.get('*.*', express.static(distFolder, { maxAge: '1y' }));
app.get('*', (req, res) => {
  res.render(indexHtml, { req });
});

const port = process.env['PORT'] || 4000;
app.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});
