FROM ubuntu:16.04

# Install dependencies.
RUN apt-get update && apt-get install -y --no-install-recommends \
  apt-transport-https ca-certificates curl language-pack-ru mc tzdata \
&& apt-get clean && rm -rf /tmp/* /var/lib/apt/lists/* /var/tmp/* \
# Set the timezone.
&& echo Europe/Moscow > /etc/timezone \
&& ln -sf /usr/share/zoneinfo/Europe/Moscow /etc/localtime

# Set locales for Docker image.
ENV LANG=ru_RU.UTF-8 LANGUAGE=ru_RU:ru LC_ALL=ru_RU.UTF-8

##
# Install NodeJS.
##

RUN NODE_VERSION=8.x \
&& curl -sL https://deb.nodesource.com/setup_"$NODE_VERSION" | bash - \
&& apt-get update && apt-get install -y --no-install-recommends nodejs \
&& apt-get clean && rm -rf /tmp/* /var/lib/apt/lists/* /var/tmp/* \
# Update Npm.
&& npm install --global npm

# Set working directory.
WORKDIR /home/docker

# Default command to execute when container starts.
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh
ENTRYPOINT ["docker-entrypoint.sh"]
