import browsersync from "browser-sync"; // локальный сервер
import newer from "gulp-newer";

// Экспорт плагинов
export const plugins = {
    browsersync: browsersync,
    newer: newer
}