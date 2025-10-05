# 建構階段 (build stage)
FROM node:18-alpine AS build

WORKDIR /app

# 先複製 package.json & lock 檔，避免每次 build 都重跑安裝
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製專案
COPY . .

# 打包 Nuxt3 (會輸出 .output/)
RUN npm run build

# -------------------------
# 執行階段 (runtime stage)
FROM node:18-alpine

WORKDIR /app

# 複製 build 後輸出
COPY --from=build /app/.output ./.output

# Nuxt3 預設用 node server 啟動
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
