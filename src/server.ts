import app from "./app";
import db from "./database";

const PORT = process.env.PORT || 3000;

(async (): Promise<void> => {

    try {
        await db.connect();
    } catch (error) {
        console.error((error as Error).stack);
    }

    app.listen(PORT, ()=> console.log(`Server running at ${PORT}`))

})();

