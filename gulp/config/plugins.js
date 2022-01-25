import browsersync from "browser-sync"; // локальный сервер
import newer from "gulp-newer"; // проверка обновления файлов
import ifPlugin from "gulp-if"; // условное ветвление для работы в режиме разработки и продакшена


// Экспорт плагинов
export const plugins = {
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}