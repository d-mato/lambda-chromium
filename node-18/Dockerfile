FROM public.ecr.aws/lambda/nodejs:18

RUN yum install -y amazon-linux-extras && \
    amazon-linux-extras enable epel && \
    yum install -y epel-release && \
    yum install -y chromium && \
    yum remove -y amazon-linux-extras epel-release && \
    yum clean all && \
    rm -rf /var/cache/yum
