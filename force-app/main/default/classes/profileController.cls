public without sharing class profileController {
    @AuraEnabled
    public static void register(String email, String firstName, String lastName, String password){
        try {
            User user = new User();
            user.Email = email;
            user.FirstName = firstName;
            user.LastName = lastName;
            user.Username = email;
            user.CommunityNickName = user.Username;

            Id userId = Site.createExternalUser(user, null, password);
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static String login(String email, String password){
        try {
            return Site.login(email, password, '/').getUrl();
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
