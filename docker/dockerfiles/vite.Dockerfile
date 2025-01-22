# Use Ruby and Node.js base images for compatibility with Vite and Chatwoot
FROM ruby:3.3.3-alpine3.19

# Set up environment variables
ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV RAILS_ENV=development
ENV NODE_ENV=development

# Install necessary packages
RUN apk add --no-cache \
  build-base \
  openssl \
  git \
  nodejs=20.15.1-r0 \
  npm \
  bash

# Install pnpm
RUN wget -qO- https://get.pnpm.io/install.sh | SHELL="$(which sh)" sh - \
    && echo 'export PNPM_HOME="/root/.local/share/pnpm"' >> /root/.bashrc \
    && echo 'export PATH="$PNPM_HOME:$PATH"' >> /root/.bashrc

# Set working directory
WORKDIR /app

# Copy only the package files initially to leverage Docker caching
COPY package.json ./

# Install dependencies using pnpm
RUN pnpm install

# Copy the entire application code
COPY . /app

# Ensure the Vite entrypoint script is executable
RUN chmod +x docker/entrypoints/vite.sh

# Expose Vite's default development port
EXPOSE 3036

# Set the default command to run Vite in development mode
CMD ["bin/vite", "dev"]
