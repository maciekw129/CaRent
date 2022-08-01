public without sharing class profileController {

    public class customException extends Exception {}

    @AuraEnabled
    public static void register(String email, String firstName, String lastName, String password){

        if(String.isBlank(email) || String.isBlank(password) || String.isBlank(firstName) || String.isBlank(lastName)) {
            throw new customException('Fields can\'t be empty');
        }

        User user = new User();
        user.Email = email;
        user.FirstName = firstName;
        user.LastName = lastName;
        user.Username = email;
        user.CommunityNickName = user.Username;

        Id userId = Site.createExternalUser(user, null, password);
    }

    @AuraEnabled
    public static String login(String email, String password){
        if(String.isBlank(email) || String.isBlank(password)) {
                throw new customException('Fields can\'t be empty');
            }

        return Site.login(email, password, '/').getUrl();
    }
}
