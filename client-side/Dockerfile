# 1. Node imajını kullan
FROM node:18-alpine

# 2. Çalışma dizinini ayarla
WORKDIR /usr/src/app

# 3. package.json ve package-lock.json'ı kopyala
COPY package*.json ./

# 4. Bağımlılıkları yükle
RUN npm install

# 5. Proje dosyalarını kopyala
COPY  . .
EXPOSE 5173
# 6. Vite dev sunucusunu başlat
CMD ["npm", "run", "dev"]
