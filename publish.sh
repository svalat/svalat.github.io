#!/bin/bash

set -u
set -e
set -x

rsync --progress -a --delete --exclude .git --exclude .gitignore --exclude publish.sh . prograo@ssh.cluster027.hosting.ovh.net:~/me
