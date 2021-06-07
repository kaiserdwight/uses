function homestead() {
    ( cd ~/Homestead && vagrant $* )
}

function art() {
    php artisan "$@"
}

function laragon() {
	cd /c/laragon/www/$*
}

function reload() {
	. ~/.bashrc;
	echo "\"~/.bashrc\" reloaded";
}

function randomEp() {
	local SEASON=$1;
	local EPISODE=$2;

	echo 'Se'$((1 + $RANDOM % SEASON))'Ep'$((1 + $RANDOM % EPISODE));
}

#laravel aliases
alias phpunit='vendor/bin/phpunit'
alias pf="phpunit --filter "
alias fresh="php artisan migrate:fresh --seed"
alias artcc="php artisan clear-compiled"
alias cdo="composer dump-autoload -o"
alias laradeploy="composer install --optimize-autoloader --no-dev && npm run prod"

#npm aliases
alias nrd="npm run dev"
alias nrp="npm run prod"
alias nrw="npm run watch"

#git aliases
alias gac="git add . && git commit -a -m "
alias wip="git add . && git commit -m 'wip' && git push"
alias nah="git reset --hard && git clean -df"

#other aliases
alias vue='winpty vue.cmd'
alias botmanclr="php artisan botman:cache:clear && php artisan cache:clear  && php artisan config:clear"
