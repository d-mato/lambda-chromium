FROM public.ecr.aws/lambda/nodejs:20

COPY yum/fedora.repo /etc/yum.repos.d/fedora.repo
RUN dnf install -y chromium && \
    dnf clean all
    
ENV CHROMIUM_PATH=/usr/bin/chromium-browser

COPY package.json package-lock.json ./
RUN npm install
    
COPY main.ts .
RUN npx -y esbuild main.ts --platform=node --format=cjs --outfile=main.js
    
CMD ["main.handler"]
