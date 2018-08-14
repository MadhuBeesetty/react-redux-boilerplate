export default function selectUser (user) {
    console.log("you clicked on user: ", user.a);
    return{
        type: "USER_SELECTED",
        payload: user
    }
};