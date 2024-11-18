FROM public.ecr.aws/lambda/nodejs:20

COPY yum/fedora.repo /etc/yum.repos.d/fedora.repo
RUN dnf install -y chromium && \
    dnf clean all
