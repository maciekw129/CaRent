public without sharing class carsController {
    @AuraEnabled
    public static List<car__c> getAllCars(){
        try {
            return [SELECT Id, ImageUrl__c, Air_conditioning__c, Brand__c, Car_type__c, Day_cost__c, Engine_type__c, Model_name__c, Number_of_seats__c, Transmission__c, Year_of_production__c FROM Car__c];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
