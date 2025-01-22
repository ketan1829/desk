FROM ruby:3.3.3-alpine3.19

COPY docker/entrypoints/webpack.sh /docker/entrypoints/webpack.sh

RUN chmod +x docker/entrypoints/webpack.sh

EXPOSE 3035
CMD ["bin/webpack-dev-server"]