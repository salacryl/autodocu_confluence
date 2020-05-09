import express from "express";
import { createLogger, format, transports, } from "winston";
import exphbs from "express-handlebars";
import bodyParser from "body-parser";
import cors from "cors";
//import methodOverride from "method-override";
//import browserSync from "browser-sync";
//import path from "path";
import wiki from "./handledocumentation";
// init logger
const logger = createLogger({
	format: format.combine(
		format.splat(),
		format.simple()
	),
	transports: [new transports.Console(),],
});

// Get Port
const PORT = process.env.PORT || 5000;
const ENV = process.env.APP_ENV || "dev";


// init App
const app = express();

// init view engine
app.engine("handlebars", exphbs({ defaultLayout: "main", }));
app.set("view engine", "handlebars");


app.use(cors());


// body-parser
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true, }));

// Method-Override
//app.use(methodOverride("_method"));

// publish public folder
//app.use(express.static(path.join(__dirname, "/public")));

// default route 
app.post("/", (req, res) => {
	wiki.writeDocu(req.body.data, (result) => {
		res.json({editingstatus: result,});
	});

});
app.get("/", (req, res) => {
	res.send("API is up and ready!");
});

app.listen(PORT, () => logger.log("info", "Webservice startet on Port: %d", PORT));

/** Test doku automation
 * @returns {int} 0 
*/

// init browser-sync
logger.log("info", "ENV ist: %s", ENV);
// if (ENV === "dev") {
// 	const bs = browserSync.create();
// 	bs.init({
// 		port: PORT + 1,
// 		proxy: {
// 			target: "localhost:" + PORT,
// 		},
// 	});
// }