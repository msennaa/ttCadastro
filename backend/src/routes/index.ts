import { Router } from "express";
import employeesRoute from "./employeesRoute";

const route = Router();

route.use('/employees', employeesRoute);

export default route;