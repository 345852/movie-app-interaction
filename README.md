
  # 影视app交互

  This is a code bundle for 影视app交互. The original project is available at https://www.figma.com/design/U0rHnVdtIIMCfgdt4iEJU8/%E5%BD%B1%E8%A7%86app%E4%BA%A4%E4%BA%92.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deploying to Tencent Cloud COS

  Run `npm run build` to generate `dist/`.

  Configure a COS upload tool (`coscli` or `coscmd`), then set:

  - `TENCENT_COS_BUCKET`, for example `movie-app-1250000000`
  - `TENCENT_COS_REGION`, for example `ap-guangzhou`
  - `TENCENT_COS_PREFIX`, optional path prefix
  - `TENCENT_COS_DOMAIN`, optional custom/static website domain

  Run `npm run deploy:tencent` to upload the current build.
  
