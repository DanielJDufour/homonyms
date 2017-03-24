var gulp = require('gulp');
var yaml = require('gulp-yaml');

gulp.src("./src/homonyms.yaml")
    .pipe(yaml({schema: "FAILSAFE_SCHEMA", safe: true, space: 0}))
    .pipe(gulp.dest("./dist/"));
