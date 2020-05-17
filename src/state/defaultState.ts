import {ProphetAppData} from "../model/ProphetAppData";
import {ServerErrors} from "../model/ServerErrors";
import {ErrorItem} from "../model/ErrorItem";
import {RepoConfig} from "../model/RepoConfig";
import {State} from "./state";
import {Prophet} from "../model/configuration/Prophet";
import {MicroserviceData} from "../model/configuration/MicroserviceData";

// const data: ProphetAppData = {
//     global: {
//         projectName: "TMS",
//         communication: `graph LR;A-->B;B-->C;`,
//         contextMap: `graph TD;D-->E;E-->F;F-->G;`,
//     },
//     ms: [
//         {
//             name: "msa",
//             boundedContext: `graph LR;
//         I-->J;
//         J-->K;
//         I-->W;`,
//         },
//     ],
//     isMonolith: false
// }

// function getAnalysisErrors() {
//     let analysisErrors = new ServerErrors();
//     let annotationError = new ErrorItem(0, "No supported annotations found");
//     let javaError = new ErrorItem( 1, "Java code not found");
//     let notGitHubUrl = new ErrorItem(10, "Provided address is not Github URL");
//     let notOrganization = new ErrorItem (11, "Provided address does not contain valid organization");
//     let notRepository = new ErrorItem (12, "Provided address does not contain valid repository");
//     analysisErrors.errors.push(annotationError);
//     analysisErrors.errors.push(javaError);
//     analysisErrors.errors.push(notGitHubUrl);
//     analysisErrors.errors.push(notOrganization);
//     analysisErrors.errors.push(notRepository);
//     return analysisErrors;
// }

export const defaultState: State = {
    "global": {
        "projectName": "tms",
        "noCommunication": true,
        "communication": "graph TD\nN/A\n",
        "noContextMap": false,
        "contextMap": "classDiagram\nTravelResult \"*\" --> \"1\" TrainType\n\t class Order\n      Order : +String to\n      Order : +String seatNumber\n      Order : +UUID id\n      Order : +String price\n      Order : +Date boughtDate\n      Order : +String trainNumber\n      Order : +String from\n      Order : +int documentType\n      Order : +int seatClass\n      Order : +Date travelDate\n      Order : +String contactsDocumentNumber\n      Order : +Date travelTime\n      Order : +int coachNumber\n      Order : +int status\n      Order : +UUID accountId\n      Order : +String contactsName\n\t class Money\n      Money : +String userId\n      Money : +String id\n      Money : +MoneyType type\n      Money : +String money\n\t class Config\n      Config : +String value\n      Config : +String name\n      Config : +String description\n\t class AuthDto\n      AuthDto : +String userId\n      AuthDto : +String password\n      AuthDto : +String userName\n\t class Trip\n      Trip : +String terminalStationId\n      Trip : +TripId tripId\n      Trip : +String stationsId\n      Trip : +String startingStationId\n      Trip : +String trainTypeId\n      Trip : +String routeId\n      Trip : +Date startingTime\n      Trip : +Date endTime\n\t class TrainType\n      TrainType : +String id\n      TrainType : +int averageSpeed\n      TrainType : +int confortClass\n      TrainType : +int economyClass\n\t class ConsignPrice\n      ConsignPrice : +double beyondPrice\n      ConsignPrice : +UUID id\n      ConsignPrice : +double initialWeight\n      ConsignPrice : +double withinPrice\n      ConsignPrice : +double initialPrice\n      ConsignPrice : +int index\n\t class Consign\n      Consign : +String from\n      Consign : +String to\n      Consign : +String phone\n      Consign : +String handleDate\n      Consign : +String targetDate\n      Consign : +boolean isWithin\n      Consign : +double weight\n      Consign : +UUID id\n      Consign : +UUID orderId\n      Consign : +String consignee\n      Consign : +UUID accountId\n\t class BasicAuthDto\n      BasicAuthDto : +String username\n      BasicAuthDto : +String password\n      BasicAuthDto : +String verificationCode\n      BasicAuthDto : +long serialVersionUID\n\t class UserDto\n      UserDto : +int documentType\n      UserDto : +String userName\n      UserDto : +int gender\n      UserDto : +UUID userId\n      UserDto : +String password\n      UserDto : +String documentNum\n      UserDto : +String email\n\t class Response\n      Response : +String msg\n      Response : +T data\n      Response : +Integer status\n\t class Station\n      Station : +String name\n      Station : +String id\n      Station : +int stayTime\n\t class PriceConfig\n      PriceConfig : +UUID id\n      PriceConfig : +double basicPriceRate\n      PriceConfig : +String trainType\n      PriceConfig : +double firstClassPriceRate\n      PriceConfig : +String routeId\n\t class TokenDto\n      TokenDto : +UUID userId\n      TokenDto : +String username\n      TokenDto : +String token\n      TokenDto : +long serialVersionUID\n\t class ConsignRecord\n      ConsignRecord : +String from\n      ConsignRecord : +String to\n      ConsignRecord : +String phone\n      ConsignRecord : +String handleDate\n      ConsignRecord : +String targetDate\n      ConsignRecord : +UUID id\n      ConsignRecord : +double weight\n      ConsignRecord : +UUID orderId\n      ConsignRecord : +String consignee\n      ConsignRecord : +UUID accountId\n      ConsignRecord : +double price\n\t class Route\n      Route : +String stations\n      Route : +String terminalStationId\n      Route : +String startStationId\n      Route : +String id\n      Route : +Integer distances\n\t class TravelResult\n      TravelResult : +Map<String,String> prices\n      TravelResult : +boolean status\n      TravelResult : +String message\n      TravelResult : +double percent\n\t class Assurance\n      Assurance : +UUID orderId\n      Assurance : +AssuranceType type\n      Assurance : +UUID id\n\t class RoutePlanResultUnit\n      RoutePlanResultUnit : +String toStationName\n      RoutePlanResultUnit : +String trainTypeId\n      RoutePlanResultUnit : +String priceForSecondClassSeat\n      RoutePlanResultUnit : +Date startingTime\n      RoutePlanResultUnit : +String tripId\n      RoutePlanResultUnit : +String stopStations\n      RoutePlanResultUnit : +String priceForFirstClassSeat\n      RoutePlanResultUnit : +Date endTime\n      RoutePlanResultUnit : +String fromStationName\n\t class TrainFood\n      TrainFood : +String tripId\n      TrainFood : +UUID id\n      TrainFood : +Food foodList\n\t class User\n      User : +String documentType\n      User : +int gender\n      User : +String userName\n      User : +UUID userId\n      User : +String password\n      User : +String documentNum\n      User : +String email\n\t class FoodOrder\n      FoodOrder : +String foodName\n      FoodOrder : +UUID id\n      FoodOrder : +String storeName\n      FoodOrder : +int foodType\n      FoodOrder : +String stationName\n      FoodOrder : +UUID orderId\n      FoodOrder : +double price\n\t class SecurityConfig\n      SecurityConfig : +String value\n      SecurityConfig : +UUID id\n      SecurityConfig : +String name\n      SecurityConfig : +String description\n\t class FoodStore\n      FoodStore : +String telephone\n      FoodStore : +Food foodList\n      FoodStore : +UUID id\n      FoodStore : +String storeName\n      FoodStore : +String businessTime\n      FoodStore : +String stationId\n      FoodStore : +double deliveryFee\n\t class Contacts\n      Contacts : +int documentType\n      Contacts : +String documentNumber\n      Contacts : +UUID id\n      Contacts : +String phoneNumber\n      Contacts : +String name\n      Contacts : +UUID accountId\n\t class Payment\n      Payment : +String price\n      Payment : +PaymentType type\n      Payment : +String orderId\n      Payment : +String userId\n      Payment : +String id\n",
        "cannotClone": false
    },
    "ms": [
        {
        "name": "ts-contacts-service",
        "noBoundedContext": false,
        "notJava": false,
        "boundedContext": "classDiagram\n\t class Contacts\n      Contacts : +int documentType\n      Contacts : +String documentNumber\n      Contacts : +UUID id\n      Contacts : +String phoneNumber\n      Contacts : +String name\n      Contacts : +UUID accountId\n"
        },
        {
            "name": "ts-admin-user-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class User\n      User : +int documentType\n      User : +String userName\n      User : +int gender\n      User : +UUID userId\n      User : +String password\n      User : +String documentNum\n      User : +String email\n\t class UserDto\n      UserDto : +int documentType\n      UserDto : +String password\n      UserDto : +String userName\n      UserDto : +int gender\n      UserDto : +String documentNum\n      UserDto : +String email\n"
        },
        {
            "name": "ts-food-map-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class TrainFood\n      TrainFood : +String tripId\n      TrainFood : +UUID id\n      TrainFood : +Food foodList\n\t class FoodStore\n      FoodStore : +String telephone\n      FoodStore : +Food foodList\n      FoodStore : +UUID id\n      FoodStore : +String storeName\n      FoodStore : +String businessTime\n      FoodStore : +String stationId\n      FoodStore : +double deliveryFee\n"
        },
        {
            "name": "ts-cancel-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class User\n      User : +int documentType\n      User : +String userName\n      User : +int gender\n      User : +UUID userId\n      User : +String password\n      User : +String documentNum\n      User : +String email\n"
        },
        {
            "name": "ts-config-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class Config\n      Config : +String value\n      Config : +String name\n      Config : +String description\n"
        },
        {
            "name": "ts-assurance-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class Assurance\n      Assurance : +UUID orderId\n      Assurance : +AssuranceType type\n      Assurance : +UUID id\n"
        },
        {
            "name": "ts-order-other-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class Order\n      Order : +String to\n      Order : +String seatNumber\n      Order : +UUID id\n      Order : +String price\n      Order : +Date boughtDate\n      Order : +String trainNumber\n      Order : +String from\n      Order : +int documentType\n      Order : +int seatClass\n      Order : +Date travelDate\n      Order : +String contactsDocumentNumber\n      Order : +Date travelTime\n      Order : +int coachNumber\n      Order : +int status\n      Order : +UUID accountId\n      Order : +String contactsName\n"
        },
        {
            "name": "ts-route-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class Route\n      Route : +String startStationId\n      Route : +String id\n      Route : +String stations\n      Route : +Integer distances\n      Route : +String terminalStationId\n"
        },
        {
            "name": "ts-price-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class PriceConfig\n      PriceConfig : +UUID id\n      PriceConfig : +double basicPriceRate\n      PriceConfig : +String trainType\n      PriceConfig : +double firstClassPriceRate\n      PriceConfig : +String routeId\n"
        },
        {
            "name": "ts-preserve-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class TravelResult\n      TravelResult : +Map<String,String> prices\n      TravelResult : +boolean status\n      TravelResult : +double percent\n      TravelResult : +TrainType trainType\n\t class User\n      User : +int documentType\n      User : +String userName\n      User : +int gender\n      User : +UUID userId\n      User : +String password\n      User : +String documentNum\n      User : +String email\n\t class Consign\n      Consign : +String from\n      Consign : +String to\n      Consign : +String phone\n      Consign : +String handleDate\n      Consign : +String targetDate\n      Consign : +boolean isWithin\n      Consign : +double weight\n      Consign : +UUID id\n      Consign : +UUID orderId\n      Consign : +String consignee\n      Consign : +UUID accountId\n"
        },
        {
            "name": "ts-security-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class SecurityConfig\n      SecurityConfig : +String value\n      SecurityConfig : +UUID id\n      SecurityConfig : +String name\n      SecurityConfig : +String description\n"
        },
        {
            "name": "ts-consign-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class Consign\n      Consign : +String from\n      Consign : +String to\n      Consign : +String phone\n      Consign : +String handleDate\n      Consign : +String targetDate\n      Consign : +boolean isWithin\n      Consign : +UUID id\n      Consign : +double weight\n      Consign : +UUID orderId\n      Consign : +String consignee\n      Consign : +UUID accountId\n\t class ConsignRecord\n      ConsignRecord : +String from\n      ConsignRecord : +String to\n      ConsignRecord : +String phone\n      ConsignRecord : +String handleDate\n      ConsignRecord : +String targetDate\n      ConsignRecord : +UUID id\n      ConsignRecord : +double weight\n      ConsignRecord : +UUID orderId\n      ConsignRecord : +String consignee\n      ConsignRecord : +UUID accountId\n      ConsignRecord : +double price\n"
        },
        {
            "name": "ts-train-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class TrainType\n      TrainType : +String id\n      TrainType : +int averageSpeed\n      TrainType : +int confortClass\n      TrainType : +int economyClass\n"
        },
        {
            "name": "ts-order-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class Order\n      Order : +String to\n      Order : +String seatNumber\n      Order : +UUID id\n      Order : +String price\n      Order : +Date boughtDate\n      Order : +String trainNumber\n      Order : +String from\n      Order : +int documentType\n      Order : +int seatClass\n      Order : +Date travelDate\n      Order : +String contactsDocumentNumber\n      Order : +Date travelTime\n      Order : +int coachNumber\n      Order : +int status\n      Order : +UUID accountId\n      Order : +String contactsName\n"
        },
        {
            "name": "ts-food-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class Route\n      Route : +String startStationId\n      Route : +String id\n      Route : +String stations\n      Route : +Integer distances\n      Route : +String terminalStationId\n\t class FoodOrder\n      FoodOrder : +String foodName\n      FoodOrder : +UUID id\n      FoodOrder : +String storeName\n      FoodOrder : +int foodType\n      FoodOrder : +String stationName\n      FoodOrder : +UUID orderId\n      FoodOrder : +double price\n"
        },
        {
            "name": "ts-admin-basic-info-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class Contacts\n      Contacts : +int documentType\n      Contacts : +String documentNumber\n      Contacts : +UUID id\n      Contacts : +String phoneNumber\n      Contacts : +String name\n      Contacts : +UUID accountId\n"
        },
        {
            "name": "ts-consign-price-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class ConsignPrice\n      ConsignPrice : +double beyondPrice\n      ConsignPrice : +UUID id\n      ConsignPrice : +double initialWeight\n      ConsignPrice : +double withinPrice\n      ConsignPrice : +double initialPrice\n      ConsignPrice : +int index\n"
        },
        {
            "name": "ts-basic-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class TravelResult\n      TravelResult : +Map<String,String> prices\n      TravelResult : +boolean status\n      TravelResult : +double percent\n      TravelResult : +TrainType trainType\n\t class Route\n      Route : +String startStationId\n      Route : +String id\n      Route : +String stations\n      Route : +Integer distances\n      Route : +String terminalStationId\n"
        },
        {
            "name": "ts-preserve-other-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class TravelResult\n      TravelResult : +Map<String,String> prices\n      TravelResult : +boolean status\n      TravelResult : +double percent\n      TravelResult : +TrainType trainType\n\t class User\n      User : +int documentType\n      User : +String userName\n      User : +int gender\n      User : +UUID userId\n      User : +String password\n      User : +String documentNum\n      User : +String email\n\t class Consign\n      Consign : +String from\n      Consign : +String to\n      Consign : +String phone\n      Consign : +String handleDate\n      Consign : +String targetDate\n      Consign : +boolean isWithin\n      Consign : +double weight\n      Consign : +UUID id\n      Consign : +UUID orderId\n      Consign : +String consignee\n      Consign : +UUID accountId\n"
        },
        {
            "name": "ts-common",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class Response\n      Response : +String msg\n      Response : +T data\n      Response : +Integer status\n"
        },
        {
            "name": "ts-station-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class Station\n      Station : +String name\n      Station : +String id\n      Station : +int stayTime\n"
        },
        {
            "name": "ts-auth-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class AuthDto\n      AuthDto : +String userId\n      AuthDto : +String password\n      AuthDto : +String userName\n\t class BasicAuthDto\n      BasicAuthDto : +String username\n      BasicAuthDto : +String password\n      BasicAuthDto : +String verificationCode\n      BasicAuthDto : +long serialVersionUID\n\t class TokenDto\n      TokenDto : +UUID userId\n      TokenDto : +String username\n      TokenDto : +String token\n      TokenDto : +long serialVersionUID\n\t class User\n      User : +UUID userId\n      User : +String username\n      User : +String password\n      User : +String roles\n"
        },
        {
            "name": "ts-user-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class AuthDto\n      AuthDto : +String userId\n      AuthDto : +String password\n      AuthDto : +String userName\n\t class UserDto\n      UserDto : +int documentType\n      UserDto : +String userName\n      UserDto : +int gender\n      UserDto : +UUID userId\n      UserDto : +String password\n      UserDto : +String documentNum\n      UserDto : +String email\n\t class User\n      User : +int documentType\n      User : +String userName\n      User : +int gender\n      User : +UUID userId\n      User : +String password\n      User : +String documentNum\n      User : +String email\n"
        },
        {
            "name": "ts-ticketinfo-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class TravelResult\n      TravelResult : +Map<String,String> prices\n      TravelResult : +boolean status\n      TravelResult : +String message\n      TravelResult : +double percent\n      TravelResult : +TrainType trainType\n"
        },
        {
            "name": "ts-payment-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class Money\n      Money : +String userId\n      Money : +String money\n\t class Payment\n      Payment : +String price\n      Payment : +String orderId\n      Payment : +String userId\n      Payment : +String id\n"
        },
        {
            "name": "ts-inside-payment-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class Money\n      Money : +MoneyType type\n      Money : +String userId\n      Money : +String id\n      Money : +String money\n\t class Payment\n      Payment : +String price\n      Payment : +PaymentType type\n      Payment : +String orderId\n      Payment : +String userId\n      Payment : +String id\n"
        },
        {
            "name": "ts-travel-plan-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class RoutePlanResultUnit\n      RoutePlanResultUnit : +String toStationName\n      RoutePlanResultUnit : +String trainTypeId\n      RoutePlanResultUnit : +String priceForSecondClassSeat\n      RoutePlanResultUnit : +Date startingTime\n      RoutePlanResultUnit : +String tripId\n      RoutePlanResultUnit : +String stopStations\n      RoutePlanResultUnit : +String priceForFirstClassSeat\n      RoutePlanResultUnit : +Date endTime\n      RoutePlanResultUnit : +String fromStationName\n"
        },
        {
            "name": "ts-travel2-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\nTravelResult \"*\" --> \"1\" TrainType\n\t class TrainType\n      TrainType : +String id\n      TrainType : +int averageSpeed\n      TrainType : +int confortClass\n      TrainType : +int economyClass\n\t class TravelResult\n      TravelResult : +Map<String,String> prices\n      TravelResult : +boolean status\n      TravelResult : +double percent\n\t class Route\n      Route : +String startStationId\n      Route : +String id\n      Route : +String stations\n      Route : +Integer distances\n      Route : +String terminalStationId\n\t class Trip\n      Trip : +String terminalStationId\n      Trip : +TripId tripId\n      Trip : +String stationsId\n      Trip : +String startingStationId\n      Trip : +String trainTypeId\n      Trip : +String routeId\n      Trip : +Date startingTime\n      Trip : +Date endTime\n"
        },
        {
            "name": "ts-travel-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\nTravelResult \"*\" --> \"1\" TrainType\n\t class TrainType\n      TrainType : +String id\n      TrainType : +int averageSpeed\n      TrainType : +int confortClass\n      TrainType : +int economyClass\n\t class Trip\n      Trip : +String terminalStationId\n      Trip : +TripId tripId\n      Trip : +String stationsId\n      Trip : +Date startingTime\n      Trip : +String startingStationId\n      Trip : +String trainTypeId\n      Trip : +String routeId\n      Trip : +Date endTime\n\t class TravelResult\n      TravelResult : +Map<String,String> prices\n      TravelResult : +boolean status\n      TravelResult : +String message\n      TravelResult : +double percent\n"
        },
        {
            "name": "ts-admin-order-service",
            "noBoundedContext": false,
            "notJava": false,
            "boundedContext": "classDiagram\n\t class Order\n      Order : +String to\n      Order : +String seatNumber\n      Order : +String price\n      Order : +Date boughtDate\n      Order : +String trainNumber\n      Order : +String from\n      Order : +int documentType\n      Order : +int seatClass\n      Order : +Date travelDate\n      Order : +String contactsDocumentNumber\n      Order : +Date travelTime\n      Order : +UUID id\n      Order : +int coachNumber\n      Order : +int status\n      Order : +UUID accountId\n      Order : +String contactsName\n"
        },
        {
            "name": "ts-news-service",
            "noBoundedContext": true,
            "notJava": true,
            "boundedContext": null
        },
        {
            "name": "ts-ui-dashboard",
            "noBoundedContext": true,
            "notJava": true,
            "boundedContext": null
        },
        {
            "name": "ts-ticket-office-service",
            "noBoundedContext": true,
            "notJava": true,
            "boundedContext": null
        },
        {
            "name": "image",
            "noBoundedContext": true,
            "notJava": true,
            "boundedContext": null
        },
        {
            "name": "deployment",
            "noBoundedContext": true,
            "notJava": true,
            "boundedContext": null
        },
        {
            "name": "ts-voucher-service",
            "noBoundedContext": true,
            "notJava": true,
            "boundedContext": null
        },
        {
            "name": "jenkins-ci",
            "noBoundedContext": true,
            "notJava": true,
            "boundedContext": null
        }
    ],

    // prophetConfigs: {
    //     repoConfigurations: [
    //         {
    //             id: 0, // web app generated ID
    //             data: {
    //                 communication: "graph LR;A-->B;B-->C;", // from prophet
    //                 contextMap: "graph LR;A-->B;B-->C;", // from prophet
    //                 microservices: [
    //                     {
    //                         boundedContext: "graph LR;A-->B;B-->C;", // from prophet
    //                         detail: { // from github api
    //                             name: "acmsac",
    //                             html_url: "https://github.com/cloudhubs/acmsac",
    //                             full_name: "cloudhubs/acmsac",
    //                             analysisErrors: [] //true false array
    //                         },
    //                     },
    //                 ]
    //             },
    //             repo: "tms", // derived repository
    //             org: "cloudhubs", // derived organization
    //             detail: { // detail fetched from github API
    //                 name: "Cloudhubs",
    //                 location: "Hankamer Academic Building, 105 Baylor Ave, Suite H266, Waco, TX 76706",
    //                 avatar_url: "https://avatars2.githubusercontent.com/u/56092418?v=4",
    //                 html_url: "https://github.com/cloudhubs"
    //             },
    //             repositoryErrors: {
    //                 errors: []
    //             },
    //             isMonolith: true,
    //             url: "https://github.com/cloudhubs/tms", // user given link
    //
    //         }
    //     ]
    //
    // },
    // //deprecated
    // backendUrl: 'localhost:8080',
    // organization: 'cloudhubs',
    // repository: 'tms',
    // communicationGraph: `graph LR;
    //     A-->B;
    //     B-->C;
    //     B-->D[name];
    //   `,
    // prophetAppData: data,
    // loading: false,
    // ms: "",
    // contextMap: false,
    // communication: false,
    // configMultiple: [new RepoConfig(), new RepoConfig()],
    // configSingle: {},
    // isConfigSingle: true,
    // analysisError: getAnalysisErrors(),
    // githubUrl: ""
}
