# Use the official Nginx image as the base
FROM nginx:alpine

# Copy the static files from the current directory to the Nginx html folder
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
