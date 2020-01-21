
import {test} from "./api";
import {createManyUsers} from "./utils/users";

const users = createManyUsers(100);
test(users);
