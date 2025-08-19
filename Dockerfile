# Gunakan Node.js versi 20 slim (Debian) supaya stabil
FROM node:20-slim

# Install tools yang dibutuhkan (build & native modules)
RUN apt-get update && apt-get install -y python3 make g++ git curl && rm -rf /var/lib/apt/lists/*

# Buat folder kerja di container
WORKDIR /app

# Copy package.json & package-lock.json / yarn.lock
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua source code
COPY . .

# Expose port 3000
EXPOSE 3000

# Jalankan Next.js dev server
CMD ["npm", "run", "dev"]
