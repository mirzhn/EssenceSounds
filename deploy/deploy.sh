PROJECT_DIR="/var/www/essencesounds"
cd $PROJECT_DIR

cp /var/www/essencesounds/prod/prod_robots.txt /var/www/essencesounds/robots.txt

sudo systemctl restart nginx