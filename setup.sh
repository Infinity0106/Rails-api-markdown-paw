#! /bin/bash

#add identity
# ssh-add ~/.ssh/id_rsa_me

#clone repositroy
# git clone https://github.com/YOURUSERNAME/slate.git

#move to directory
# cd slate

#need to set up files
while IFS=$'~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' read -r -a myArray
do
 echo "${myArray[0]}"
done < $1

#install and run
# bundle install
# open http://localhost:4567 && bundle exec middleman server