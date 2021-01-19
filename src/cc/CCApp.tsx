import React, {useEffect} from "react";
import prophetStyles from "../prophetStyles";
import AppHeader from "../components/main/AppHeader";
import InconsistencyList from "./components/inconsistencies/InconsistencyList";

const CCApp = () => {
    const classes = prophetStyles();
    const data = {
        "metadata": {"microserviceCount":41, "classCount":128, "controllerCount": 67, "serviceCount": 34, "repositoryCount": 32, "methodCallsCount": 43, "restCallsCount": 32, "entityCount": 34, "percentageClones": "98%", "percentageInconsistencies": "88%", "modules":[{"moduleId": 1, "name": "ts-service", "clones": [{"id": 1, "cloneName":"A -> B"}], "apiInconsistency": [{"id": 1, "inconsistencyName":"No API"}], "entityInconsistency": [{"id": 1, "inconsistencyName":"No Entity"}] }]},
        "codeClones": [{"a":{"msController":{"msId":{"path":"/ts-preserve-service/src/main/java/preserve/controller/PreserveController.java","directoryName":"/ts-preserve-service/src/main/java/preserve"},"classId":"preserve.controller.PreserveController","packageName":"preserve.controller","className":"PreserveController","role":"CONTROLLER"},"msControllerMethod":{"msId":{"path":"/ts-preserve-service/src/main/java/preserve/controller/PreserveController.java","directoryName":"/ts-preserve-service/src/main/java/preserve"},"returnType":"HttpEntity","methodName":"preserve","className":"PreserveController","packageName":"preserve.controller","methodId":"preserve.controller.PreserveController.preserve","classId":"preserve.controller.PreserveController","line":31,"msArgumentList":[{"returnType":"OrderTicketsInfo"},{"returnType":"HttpHeaders"}],"msAnnotations":[{"isHttpAnnotation":true,"annotationName":"CrossOrigin","key":"origins","value":"\"*\""},{"isHttpAnnotation":true,"annotationName":"PostMapping","key":"value","value":"\"/preserve\""}]},"msServiceMethodCall":{"msId":{"path":"/ts-preserve-service/src/main/java/preserve/controller/PreserveController.java","directoryName":"/ts-preserve-service/src/main/java/preserve"},"parentPackageName":"preserve.controller","parentClassName":"PreserveController","parentMethodName":"preserve","parentClassId":"preserve.controller.PreserveController","lineNumber":36,"calledMethodName":"preserve","calledServiceId":"preserveService","statementDeclaration":"preserveService.preserve(oti, headers)"},"msControllerServiceField":{"msId":{"path":"/ts-preserve-service/src/main/java/preserve/controller/PreserveController.java","directoryName":"/ts-preserve-service/src/main/java/preserve"},"fieldClass":"PreserveService","fieldVariable":"preserveService","parentMethod":{"parentClassName":"PreserveController","parentPackageName":"preserve.controller"},"line":21},"msService":{"msId":{"path":"/ts-preserve-service/src/main/java/preserve/service/PreserveServiceImpl.java","directoryName":"/ts-preserve-service/src/main/java/preserve"},"classId":"preserve.service.PreserveServiceImpl","packageName":"preserve.service","className":"PreserveServiceImpl","role":"SERVICE"},"msServiceMethod":{"msId":{"path":"/ts-preserve-service/src/main/java/preserve/service/PreserveServiceImpl.java","directoryName":"/ts-preserve-service/src/main/java/preserve"},"returnType":"Response","methodName":"preserve","className":"PreserveServiceImpl","packageName":"preserve.service","methodId":"preserve.service.PreserveServiceImpl.preserve","classId":"preserve.service.PreserveServiceImpl","line":30,"msArgumentList":[{"returnType":"OrderTicketsInfo"},{"returnType":"HttpHeaders"}],"msAnnotations":[{"isHttpAnnotation":false,"annotationName":"Override"}]},"msRestCalls":[{"api":"\"http://ts-ticketinfo-service:15681/api/v1/ticketinfoservice/ticketinfo\"","httpMethod":"POST","returnType":"TravelResult","msId":{"path":"/ts-preserve-service/src/main/java/preserve/service/PreserveServiceImpl.java","directoryName":"/ts-preserve-service/src/main/java/preserve"},"parentPackageName":"preserve.service","parentClassName":"PreserveServiceImpl","parentMethodName":"preserve","parentClassId":"preserve.service.PreserveServiceImpl","lineNumber":110,"statementDeclaration":"restTemplate.exchange(\"http://ts-ticketinfo-service:15681/api/v1/ticketinfoservice/ticketinfo\", HttpMethod.POST, requestEntity, new ParameterizedTypeReference\u003cResponse\u003cTravelResult\u003e\u003e() {\n})"}]},"b":{"msController":{"msId":{"path":"/ts-preserve-other-service/src/main/java/preserveOther/controller/PreserveOtherController.java","directoryName":"/ts-preserve-other-service/src/main/java/preserveOther"},"classId":"preserveOther.controller.PreserveOtherController","packageName":"preserveOther.controller","className":"PreserveOtherController","role":"CONTROLLER"},"msControllerMethod":{"msId":{"path":"/ts-preserve-other-service/src/main/java/preserveOther/controller/PreserveOtherController.java","directoryName":"/ts-preserve-other-service/src/main/java/preserveOther"},"returnType":"HttpEntity","methodName":"preserve","className":"PreserveOtherController","packageName":"preserveOther.controller","methodId":"preserveOther.controller.PreserveOtherController.preserve","classId":"preserveOther.controller.PreserveOtherController","line":31,"msArgumentList":[{"returnType":"OrderTicketsInfo"},{"returnType":"HttpHeaders"}],"msAnnotations":[{"isHttpAnnotation":true,"annotationName":"CrossOrigin","key":"origins","value":"\"*\""},{"isHttpAnnotation":true,"annotationName":"PostMapping","key":"value","value":"\"/preserveOther\""}]},"msServiceMethodCall":{"msId":{"path":"/ts-preserve-other-service/src/main/java/preserveOther/controller/PreserveOtherController.java","directoryName":"/ts-preserve-other-service/src/main/java/preserveOther"},"parentPackageName":"preserveOther.controller","parentClassName":"PreserveOtherController","parentMethodName":"preserve","parentClassId":"preserveOther.controller.PreserveOtherController","lineNumber":36,"calledMethodName":"preserve","calledServiceId":"preserveService","statementDeclaration":"preserveService.preserve(oti, headers)"},"msControllerServiceField":{"msId":{"path":"/ts-preserve-other-service/src/main/java/preserveOther/controller/PreserveOtherController.java","directoryName":"/ts-preserve-other-service/src/main/java/preserveOther"},"fieldClass":"PreserveOtherService","fieldVariable":"preserveService","parentMethod":{"parentClassName":"PreserveOtherController","parentPackageName":"preserveOther.controller"},"line":21},"msService":{"msId":{"path":"/ts-preserve-other-service/src/main/java/preserveOther/service/PreserveOtherServiceImpl.java","directoryName":"/ts-preserve-other-service/src/main/java/preserveOther"},"classId":"preserveOther.service.PreserveOtherServiceImpl","packageName":"preserveOther.service","className":"PreserveOtherServiceImpl","role":"SERVICE"},"msServiceMethod":{"msId":{"path":"/ts-preserve-other-service/src/main/java/preserveOther/service/PreserveOtherServiceImpl.java","directoryName":"/ts-preserve-other-service/src/main/java/preserveOther"},"returnType":"Response","methodName":"preserve","className":"PreserveOtherServiceImpl","packageName":"preserveOther.service","methodId":"preserveOther.service.PreserveOtherServiceImpl.preserve","classId":"preserveOther.service.PreserveOtherServiceImpl","line":30,"msArgumentList":[{"returnType":"OrderTicketsInfo"},{"returnType":"HttpHeaders"}],"msAnnotations":[{"isHttpAnnotation":false,"annotationName":"Override"}]},"msRestCalls":[{"api":"\"http://ts-ticketinfo-service:15681/api/v1/ticketinfoservice/ticketinfo\"","httpMethod":"POST","returnType":"TravelResult","msId":{"path":"/ts-preserve-other-service/src/main/java/preserveOther/service/PreserveOtherServiceImpl.java","directoryName":"/ts-preserve-other-service/src/main/java/preserveOther"},"parentPackageName":"preserveOther.service","parentClassName":"PreserveOtherServiceImpl","parentMethodName":"preserve","parentClassId":"preserveOther.service.PreserveOtherServiceImpl","lineNumber":118,"statementDeclaration":"restTemplate.exchange(\"http://ts-ticketinfo-service:15681/api/v1/ticketinfoservice/ticketinfo\", HttpMethod.POST, requestEntity, new ParameterizedTypeReference\u003cResponse\u003cTravelResult\u003e\u003e() {\n})"}]},"similarityController":1.0,"similarityService":0.5,"similarityRepository":0.0,"similarityRestCalls":1.0,"globalSimilarity":0.925,"typeA":true,"typeB":false}],
        "inconsistencies": [{"id": 1, "description": "No API", "category": "API", "msClass" : "Controller.java", "msMethod": "getConfig()", "msField": "Config", "path": "/ts-service/src"}]
    };

    const inconsistencies = [
        {
            "name": "Contacts",
            "msEntities": [
                {
                    "path": "/ts-contacts-service/src/main/java/contacts/entity/Contacts.java",
                    "name": "Contacts",
                    "code": "@Data\n@AllArgsConstructor\n@Document(collection \u003d \"contacts\")\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Contacts {\n\n    @Id\n    private UUID id;\n\n    private UUID accountId;\n\n    private String name;\n\n    private int documentType;\n\n    private String documentNumber;\n\n    private String phoneNumber;\n\n    public Contacts() {\n        //Default Constructor\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Contacts other \u003d (Contacts) obj;\n        return name.equals(other.getName())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 documentNumber.equals(other.getDocumentNumber())\n                \u0026\u0026 phoneNumber.equals(other.getPhoneNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType();\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"contacts\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-contacts-service/src/main/java/contacts/entity/Contacts.java",
                            "code": "@Id\n    private UUID id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-contacts-service/src/main/java/contacts/entity/Contacts.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-contacts-service/src/main/java/contacts/entity/Contacts.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-contacts-service/src/main/java/contacts/entity/Contacts.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNumber",
                            "type": "String",
                            "path": "/ts-contacts-service/src/main/java/contacts/entity/Contacts.java",
                            "code": "private String documentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "phoneNumber",
                            "type": "String",
                            "path": "/ts-contacts-service/src/main/java/contacts/entity/Contacts.java",
                            "code": "private String phoneNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/Contacts.java",
                    "name": "Contacts",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Contacts {\n\n    private UUID id;\n\n    private UUID accountId;\n\n    private String name;\n\n    private int documentType;\n\n    private String documentNumber;\n\n    private String phoneNumber;\n\n    public Contacts() {\n        //Default Constructor\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Contacts other \u003d (Contacts) obj;\n        return name.equals(other.getName())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 documentNumber.equals(other.getDocumentNumber())\n                \u0026\u0026 phoneNumber.equals(other.getPhoneNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType();\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Contacts.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Contacts.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Contacts.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Contacts.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNumber",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Contacts.java",
                            "code": "private String documentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "phoneNumber",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Contacts.java",
                            "code": "private String phoneNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-rebook-service/src/main/java/rebook/entity/Contacts.java",
                    "name": "Contacts",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Contacts {\n\n    private UUID id;\n\n    private UUID accountId;\n\n    private String name;\n\n    private int documentType;\n\n    private String documentNumber;\n\n    private String phoneNumber;\n\n    public Contacts() {\n        //Default Constructor\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Contacts other \u003d (Contacts) obj;\n        return name.equals(other.getName())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 documentNumber.equals(other.getDocumentNumber())\n                \u0026\u0026 phoneNumber.equals(other.getPhoneNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType();\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Contacts.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Contacts.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Contacts.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Contacts.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNumber",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Contacts.java",
                            "code": "private String documentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "phoneNumber",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Contacts.java",
                            "code": "private String phoneNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Contacts.java",
                    "name": "Contacts",
                    "code": "@ToString\n@Data\npublic class Contacts implements Serializable {\n\n    private UUID id;\n\n    private UUID accountId;\n\n    private String name;\n\n    private int documentType;\n\n    private String documentNumber;\n\n    private String phoneNumber;\n\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Contacts other \u003d (Contacts) obj;\n        return name.equals(other.getName())\n                \u0026\u0026 accountId.equals(other.getAccountId())\n                \u0026\u0026 documentNumber.equals(other.getDocumentNumber())\n                \u0026\u0026 phoneNumber.equals(other.getPhoneNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType();\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Contacts.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Contacts.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Contacts.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Contacts.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNumber",
                            "type": "String",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Contacts.java",
                            "code": "private String documentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "phoneNumber",
                            "type": "String",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Contacts.java",
                            "code": "private String phoneNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Contacts.java",
                    "name": "Contacts",
                    "code": "@Data\n@NoArgsConstructor\n@AllArgsConstructor\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Contacts {\n\n    private UUID id;\n\n    private UUID accountId;\n\n    private String name;\n\n    private int documentType;\n\n    private String documentNumber;\n\n    private String phoneNumber;\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Contacts other \u003d (Contacts) obj;\n        return name.equals(other.getName())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 documentNumber.equals(other.getDocumentNumber())\n                \u0026\u0026 phoneNumber.equals(other.getPhoneNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType();\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Contacts.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Contacts.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Contacts.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Contacts.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNumber",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Contacts.java",
                            "code": "private String documentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "phoneNumber",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Contacts.java",
                            "code": "private String phoneNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Contacts.java",
                    "name": "Contacts",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Contacts {\n\n    private UUID id;\n\n    private UUID accountId;\n\n    private String name;\n\n    private int documentType;\n\n    private String documentNumber;\n\n    private String phoneNumber;\n\n    public Contacts() {\n        //Default Constructor\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Contacts other \u003d (Contacts) obj;\n        return name.equals(other.getName())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 documentNumber.equals(other.getDocumentNumber())\n                \u0026\u0026 phoneNumber.equals(other.getPhoneNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType();\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Contacts.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Contacts.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Contacts.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Contacts.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNumber",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Contacts.java",
                            "code": "private String documentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "phoneNumber",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Contacts.java",
                            "code": "private String phoneNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "UUID",
                    "annotationsHashSet": [
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "accountId",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "name",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "documentType",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "documentNumber",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "phoneNumber",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "User",
            "msEntities": [
                {
                    "path": "/ts-admin-user-service/src/main/java/adminuser/entity/User.java",
                    "name": "User",
                    "code": "@Data\n@Builder\n@AllArgsConstructor\n@NoArgsConstructor\npublic class User {\n    private UUID userId;\n    private String userName;\n    private String password;\n\n    private int gender;\n\n    private int documentType;\n\n    private String documentNum;\n\n    private String email;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "userId",
                            "type": "UUID",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/User.java",
                            "code": "private UUID userId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "userName",
                            "type": "String",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/User.java",
                            "code": "private String userName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "password",
                            "type": "String",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/User.java",
                            "code": "private String password;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "gender",
                            "type": "INT",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/User.java",
                            "code": "private int gender;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/User.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNum",
                            "type": "String",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/User.java",
                            "code": "private String documentNum;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "email",
                            "type": "String",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/User.java",
                            "code": "private String email;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "username",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "roles",
                            "type": "Set",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-cancel-service/src/main/java/cancel/entity/User.java",
                    "name": "User",
                    "code": "@Data\n@Builder\n@AllArgsConstructor\n@NoArgsConstructor\npublic class User {\n\n    private UUID userId;\n    private String userName;\n    private String password;\n\n    private int gender;\n\n    private int documentType;\n\n    private String documentNum;\n\n    private String email;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "userId",
                            "type": "UUID",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/User.java",
                            "code": "private UUID userId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "userName",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/User.java",
                            "code": "private String userName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "password",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/User.java",
                            "code": "private String password;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "gender",
                            "type": "INT",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/User.java",
                            "code": "private int gender;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/User.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNum",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/User.java",
                            "code": "private String documentNum;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "email",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/User.java",
                            "code": "private String email;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "username",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "roles",
                            "type": "Set",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/User.java",
                    "name": "User",
                    "code": "@Data\n@Builder\n@AllArgsConstructor\n@NoArgsConstructor\npublic class User {\n\n    private UUID userId;\n    private String userName;\n    private String password;\n\n    private int gender;\n\n    private int documentType;\n\n    private String documentNum;\n\n    private String email;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "userId",
                            "type": "UUID",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/User.java",
                            "code": "private UUID userId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "userName",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/User.java",
                            "code": "private String userName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "password",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/User.java",
                            "code": "private String password;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "gender",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/User.java",
                            "code": "private int gender;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/User.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNum",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/User.java",
                            "code": "private String documentNum;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "email",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/User.java",
                            "code": "private String email;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "username",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "roles",
                            "type": "Set",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/User.java",
                    "name": "User",
                    "code": "@Data\n@Builder\n@AllArgsConstructor\n@NoArgsConstructor\npublic class User {\n\n    private UUID userId;\n    private String userName;\n    private String password;\n\n    private int gender;\n\n    private int documentType;\n\n    private String documentNum;\n\n    private String email;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "userId",
                            "type": "UUID",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/User.java",
                            "code": "private UUID userId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "userName",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/User.java",
                            "code": "private String userName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "password",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/User.java",
                            "code": "private String password;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "gender",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/User.java",
                            "code": "private int gender;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/User.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNum",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/User.java",
                            "code": "private String documentNum;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "email",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/User.java",
                            "code": "private String email;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "username",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "roles",
                            "type": "Set",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-auth-service/src/main/java/auth/entity/User.java",
                    "name": "User",
                    "code": "@Data\n@Builder\n@AllArgsConstructor\n@NoArgsConstructor\npublic class User implements UserDetails {\n\n    private UUID userId;\n\n    private String username;\n\n    private String password;\n\n    private Set\u003cString\u003e roles \u003d new HashSet\u003c\u003e();\n\n    @Override\n    public Collection\u003c? extends GrantedAuthority\u003e getAuthorities() {\n        return this.roles.stream().map(SimpleGrantedAuthority::new).collect(Collectors.toList());\n    }\n\n    @Override\n    public String getPassword() {\n        return this.password;\n    }\n\n    @Override\n    public String getUsername() {\n        return this.username;\n    }\n\n    @Override\n    public boolean isAccountNonExpired() {\n        return true;\n    }\n\n    @Override\n    public boolean isAccountNonLocked() {\n        return true;\n    }\n\n    @Override\n    public boolean isCredentialsNonExpired() {\n        return true;\n    }\n\n    @Override\n    public boolean isEnabled() {\n        return true;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "userId",
                            "type": "UUID",
                            "path": "/ts-auth-service/src/main/java/auth/entity/User.java",
                            "code": "private UUID userId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "username",
                            "type": "String",
                            "path": "/ts-auth-service/src/main/java/auth/entity/User.java",
                            "code": "private String username;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "password",
                            "type": "String",
                            "path": "/ts-auth-service/src/main/java/auth/entity/User.java",
                            "code": "private String password;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "roles",
                            "type": "Set",
                            "path": "/ts-auth-service/src/main/java/auth/entity/User.java",
                            "code": "private Set\u003cString\u003e roles \u003d new HashSet\u003c\u003e();",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "userName",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "gender",
                            "type": "INT",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "documentNum",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "email",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-user-service/src/main/java/user/entity/User.java",
                    "name": "User",
                    "code": "@Data\n@Builder\n@AllArgsConstructor\n@NoArgsConstructor\npublic class User {\n\n    private UUID userId;\n    private String userName;\n    private String password;\n\n    private int gender;\n\n    private int documentType;\n\n    private String documentNum;\n\n    private String email;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "userId",
                            "type": "UUID",
                            "path": "/ts-user-service/src/main/java/user/entity/User.java",
                            "code": "private UUID userId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "userName",
                            "type": "String",
                            "path": "/ts-user-service/src/main/java/user/entity/User.java",
                            "code": "private String userName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "password",
                            "type": "String",
                            "path": "/ts-user-service/src/main/java/user/entity/User.java",
                            "code": "private String password;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "gender",
                            "type": "INT",
                            "path": "/ts-user-service/src/main/java/user/entity/User.java",
                            "code": "private int gender;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-user-service/src/main/java/user/entity/User.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNum",
                            "type": "String",
                            "path": "/ts-user-service/src/main/java/user/entity/User.java",
                            "code": "private String documentNum;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "email",
                            "type": "String",
                            "path": "/ts-user-service/src/main/java/user/entity/User.java",
                            "code": "private String email;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "username",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "roles",
                            "type": "Set",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                }
            ],
            "uniqueFields": [
                {
                    "name": "userId",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "userName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "password",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "gender",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "documentType",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "documentNum",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "email",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "username",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "roles",
                    "type": "Set",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Account",
            "msEntities": [
                {
                    "path": "/ts-admin-user-service/src/main/java/adminuser/entity/Account.java",
                    "name": "Account",
                    "code": "@Data\npublic class Account {\n\n    private UUID id;\n\n    private String accountId;\n\n    private String loginId;\n\n    private String password;\n\n    private int gender;\n\n    private String name;\n\n    private int documentType;\n\n    private String documentNum;\n\n    private String email;\n\n    public Account(){\n        gender \u003d Gender.OTHER.getCode();\n        password \u003d \"defaultPassword\"; //NOSONAR\n        name \u003d \"None\";\n        documentType \u003d DocumentType.NONE.getCode();\n        documentNum \u003d \"0123456789\";\n        email \u003d \"0123456789\";\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/Account.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "String",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/Account.java",
                            "code": "private String accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "loginId",
                            "type": "String",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/Account.java",
                            "code": "private String loginId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "password",
                            "type": "String",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/Account.java",
                            "code": "private String password;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "gender",
                            "type": "INT",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/Account.java",
                            "code": "private int gender;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/Account.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/Account.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNum",
                            "type": "String",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/Account.java",
                            "code": "private String documentNum;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "email",
                            "type": "String",
                            "path": "/ts-admin-user-service/src/main/java/adminuser/entity/Account.java",
                            "code": "private String email;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-cancel-service/src/main/java/cancel/entity/Account.java",
                    "name": "Account",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Account {\n\n    private UUID id;\n\n    private String password;\n\n    private int gender;\n\n    private String name;\n\n    private int documentType;\n\n    private String documentNum;\n\n    private String email;\n\n    public Account(){\n        gender \u003d Gender.OTHER.getCode();\n        password \u003d \"defaultPassword\"; //NOSONAR\n        name \u003d \"None\";\n        documentType \u003d DocumentType.NONE.getCode();\n        documentNum \u003d \"0123456789\";\n        email \u003d \"0123456789\";\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Account.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "password",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Account.java",
                            "code": "private String password;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "gender",
                            "type": "INT",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Account.java",
                            "code": "private int gender;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Account.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Account.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNum",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Account.java",
                            "code": "private String documentNum;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "email",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Account.java",
                            "code": "private String email;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "accountId",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "loginId",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/Account.java",
                    "name": "Account",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Account {\n\n    private UUID id;\n\n    private String password;\n\n    private int gender;\n\n    private String name;\n\n    private int documentType;\n\n    private String documentNum;\n\n    private String email;\n\n    public Account(){\n        gender \u003d Gender.OTHER.getCode();\n        password \u003d \"defaultPassword\"; //NOSONAR\n        name \u003d \"None\";\n        documentType \u003d DocumentType.NONE.getCode();\n        documentNum \u003d \"0123456789\";\n        email \u003d \"0123456789\";\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Account.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "password",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Account.java",
                            "code": "private String password;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "gender",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Account.java",
                            "code": "private int gender;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Account.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Account.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNum",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Account.java",
                            "code": "private String documentNum;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "email",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Account.java",
                            "code": "private String email;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "accountId",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "loginId",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Account.java",
                    "name": "Account",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Account {\n\n    private UUID id;\n\n    private String password;\n\n    private int gender;\n\n    private String name;\n\n    private int documentType;\n\n    private String documentNum;\n\n    private String email;\n\n    public Account(){\n        gender \u003d Gender.OTHER.getCode();\n        password \u003d \"defaultPassword\"; //NOSONAR\n        name \u003d \"None\";\n        documentType \u003d DocumentType.NONE.getCode();\n        documentNum \u003d \"0123456789\";\n        email \u003d \"0123456789\";\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Account.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "password",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Account.java",
                            "code": "private String password;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "gender",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Account.java",
                            "code": "private int gender;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Account.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Account.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentNum",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Account.java",
                            "code": "private String documentNum;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "email",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Account.java",
                            "code": "private String email;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "accountId",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "loginId",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "accountId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "loginId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "password",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "gender",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "name",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "documentType",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "documentNum",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "email",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "FoodStore",
            "msEntities": [
                {
                    "path": "/ts-food-map-service/src/main/java/food/entity/FoodStore.java",
                    "name": "FoodStore",
                    "code": "@Data\n@Document(collection \u003d \"stores\")\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class FoodStore {\n\n    @Id\n    private UUID id;\n\n    @NotNull\n    private String stationId;\n\n    private String storeName;\n\n    private String telephone;\n\n    private String businessTime;\n\n    private double deliveryFee;\n\n    private List\u003cFood\u003e foodList;\n\n    public FoodStore(){\n        //Default Constructor\n        this.stationId \u003d \"\";\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"stores\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-food-map-service/src/main/java/food/entity/FoodStore.java",
                            "code": "@Id\n    private UUID id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationId",
                            "type": "String",
                            "path": "/ts-food-map-service/src/main/java/food/entity/FoodStore.java",
                            "code": "@NotNull\n    private String stationId;",
                            "annotations": [
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "storeName",
                            "type": "String",
                            "path": "/ts-food-map-service/src/main/java/food/entity/FoodStore.java",
                            "code": "private String storeName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "telephone",
                            "type": "String",
                            "path": "/ts-food-map-service/src/main/java/food/entity/FoodStore.java",
                            "code": "private String telephone;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "businessTime",
                            "type": "String",
                            "path": "/ts-food-map-service/src/main/java/food/entity/FoodStore.java",
                            "code": "private String businessTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "deliveryFee",
                            "type": "DOUBLE",
                            "path": "/ts-food-map-service/src/main/java/food/entity/FoodStore.java",
                            "code": "private double deliveryFee;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodList",
                            "type": "List",
                            "path": "/ts-food-map-service/src/main/java/food/entity/FoodStore.java",
                            "code": "private List\u003cFood\u003e foodList;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodStore.java",
                    "name": "FoodStore",
                    "code": "@Data\npublic class FoodStore implements Serializable{\n\n    private UUID id;\n\n    private String stationId;\n\n    private String storeName;\n\n    private String telephone;\n\n    private String businessTime;\n\n    private double deliveryFee;\n\n    private List\u003cFood\u003e foodList;\n\n    public FoodStore(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodStore.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationId",
                            "type": "String",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodStore.java",
                            "code": "private String stationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "storeName",
                            "type": "String",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodStore.java",
                            "code": "private String storeName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "telephone",
                            "type": "String",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodStore.java",
                            "code": "private String telephone;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "businessTime",
                            "type": "String",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodStore.java",
                            "code": "private String businessTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "deliveryFee",
                            "type": "DOUBLE",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodStore.java",
                            "code": "private double deliveryFee;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodList",
                            "type": "List",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodStore.java",
                            "code": "private List\u003cFood\u003e foodList;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "UUID",
                    "annotationsHashSet": [
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "stationId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "storeName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "telephone",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "businessTime",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "deliveryFee",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "foodList",
                    "type": "List",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "TrainFood",
            "msEntities": [
                {
                    "path": "/ts-food-map-service/src/main/java/food/entity/TrainFood.java",
                    "name": "TrainFood",
                    "code": "@Data\n@Document(collection \u003d \"trainfoods\")\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class TrainFood {\n\n    @Id\n    private UUID id;\n\n    @NotNull\n    private String tripId;\n\n    private List\u003cFood\u003e foodList;\n\n    public TrainFood(){\n        //Default Constructor\n        this.tripId \u003d \"\";\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"trainfoods\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-food-map-service/src/main/java/food/entity/TrainFood.java",
                            "code": "@Id\n    private UUID id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-food-map-service/src/main/java/food/entity/TrainFood.java",
                            "code": "@NotNull\n    private String tripId;",
                            "annotations": [
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodList",
                            "type": "List",
                            "path": "/ts-food-map-service/src/main/java/food/entity/TrainFood.java",
                            "code": "private List\u003cFood\u003e foodList;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-food-service/src/main/java/foodsearch/entity/TrainFood.java",
                    "name": "TrainFood",
                    "code": "@Data\npublic class TrainFood implements Serializable{\n\n    public TrainFood(){\n        //Default Constructor\n    }\n\n    private UUID id;\n\n    private String tripId;\n\n    private List\u003cFood\u003e foodList;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/TrainFood.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/TrainFood.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodList",
                            "type": "List",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/TrainFood.java",
                            "code": "private List\u003cFood\u003e foodList;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "UUID",
                    "annotationsHashSet": [
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "tripId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "foodList",
                    "type": "List",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Food",
            "msEntities": [
                {
                    "path": "/ts-food-map-service/src/main/java/food/entity/Food.java",
                    "name": "Food",
                    "code": "@Data\npublic class Food implements Serializable{\n\n    private String foodName;\n    private double price;\n    public Food(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "foodName",
                            "type": "String",
                            "path": "/ts-food-map-service/src/main/java/food/entity/Food.java",
                            "code": "private String foodName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "DOUBLE",
                            "path": "/ts-food-map-service/src/main/java/food/entity/Food.java",
                            "code": "private double price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-food-service/src/main/java/foodsearch/entity/Food.java",
                    "name": "Food",
                    "code": "@Data\npublic class Food implements Serializable{\n\n    public Food(){\n        //Default Constructor\n    }\n\n    private String foodName;\n    private double price;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "foodName",
                            "type": "String",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/Food.java",
                            "code": "private String foodName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "DOUBLE",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/Food.java",
                            "code": "private double price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "foodName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "price",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Mail",
            "msEntities": [
                {
                    "path": "/ts-notification-service/src/main/java/notification/entity/Mail.java",
                    "name": "Mail",
                    "code": "@Data\npublic class Mail {\n\n    private String mailFrom;\n\n    private String mailTo;\n\n    private String mailCc;\n\n    private String mailBcc;\n\n    private String mailSubject;\n\n    private String mailContent;\n\n    private String contentType;\n\n    private List \u003c Object \u003e attachments;\n\n    private Map \u003c String, Object \u003e model;\n\n    public Mail() {\n        contentType \u003d \"text/plain\";\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "mailFrom",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/Mail.java",
                            "code": "private String mailFrom;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "mailTo",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/Mail.java",
                            "code": "private String mailTo;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "mailCc",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/Mail.java",
                            "code": "private String mailCc;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "mailBcc",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/Mail.java",
                            "code": "private String mailBcc;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "mailSubject",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/Mail.java",
                            "code": "private String mailSubject;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "mailContent",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/Mail.java",
                            "code": "private String mailContent;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contentType",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/Mail.java",
                            "code": "private String contentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "attachments",
                            "type": "List",
                            "path": "/ts-notification-service/src/main/java/notification/entity/Mail.java",
                            "code": "private List \u003c Object \u003e attachments;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "model",
                            "type": "Map",
                            "path": "/ts-notification-service/src/main/java/notification/entity/Mail.java",
                            "code": "private Map \u003c String, Object \u003e model;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "mailFrom",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "mailTo",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "mailCc",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "mailBcc",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "mailSubject",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "mailContent",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "contentType",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "attachments",
                    "type": "List",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "model",
                    "type": "Map",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "NotifyInfo",
            "msEntities": [
                {
                    "path": "/ts-notification-service/src/main/java/notification/entity/NotifyInfo.java",
                    "name": "NotifyInfo",
                    "code": "@Data\npublic class NotifyInfo {\n\n    public NotifyInfo(){\n        //Default Constructor\n    }\n\n    private String email;\n    private String orderNumber;\n    private String username;\n    private String startingPlace;\n    private String endPlace;\n    private String startingTime;\n    private String date;\n    private String seatClass;\n    private String seatNumber;\n    private String price;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "email",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/NotifyInfo.java",
                            "code": "private String email;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderNumber",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/NotifyInfo.java",
                            "code": "private String orderNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "username",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/NotifyInfo.java",
                            "code": "private String username;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/NotifyInfo.java",
                            "code": "private String startingPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/NotifyInfo.java",
                            "code": "private String endPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/NotifyInfo.java",
                            "code": "private String startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "date",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/NotifyInfo.java",
                            "code": "private String date;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/NotifyInfo.java",
                            "code": "private String seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/NotifyInfo.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-notification-service/src/main/java/notification/entity/NotifyInfo.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-cancel-service/src/main/java/cancel/entity/NotifyInfo.java",
                    "name": "NotifyInfo",
                    "code": "@Data\npublic class NotifyInfo {\n\n    public NotifyInfo(){\n        //Default Constructor\n    }\n\n    private String email;\n    private String orderNumber;\n    private String username;\n    private String startingPlace;\n    private String endPlace;\n    private String startingTime;\n    private String date;\n    private String seatClass;\n    private String seatNumber;\n    private String price;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "email",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/NotifyInfo.java",
                            "code": "private String email;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderNumber",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/NotifyInfo.java",
                            "code": "private String orderNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "username",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/NotifyInfo.java",
                            "code": "private String username;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/NotifyInfo.java",
                            "code": "private String startingPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/NotifyInfo.java",
                            "code": "private String endPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/NotifyInfo.java",
                            "code": "private String startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "date",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/NotifyInfo.java",
                            "code": "private String date;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/NotifyInfo.java",
                            "code": "private String seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/NotifyInfo.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/NotifyInfo.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/NotifyInfo.java",
                    "name": "NotifyInfo",
                    "code": "@Data\npublic class NotifyInfo {\n\n    public NotifyInfo(){\n        //Default Constructor\n    }\n\n    private String email;\n    private String orderNumber;\n    private String username;\n    private String startingPlace;\n    private String endPlace;\n    private String startingTime;\n    private String date;\n    private String seatClass;\n    private String seatNumber;\n    private String price;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "email",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/NotifyInfo.java",
                            "code": "private String email;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderNumber",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/NotifyInfo.java",
                            "code": "private String orderNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "username",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/NotifyInfo.java",
                            "code": "private String username;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/NotifyInfo.java",
                            "code": "private String startingPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/NotifyInfo.java",
                            "code": "private String endPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/NotifyInfo.java",
                            "code": "private String startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "date",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/NotifyInfo.java",
                            "code": "private String date;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/NotifyInfo.java",
                            "code": "private String seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/NotifyInfo.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/NotifyInfo.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/NotifyInfo.java",
                    "name": "NotifyInfo",
                    "code": "@Data\npublic class NotifyInfo {\n\n    public NotifyInfo(){\n        //Default Constructor\n    }\n\n    private String email;\n    private String orderNumber;\n    private String username;\n    private String startingPlace;\n    private String endPlace;\n    private String startingTime;\n    private String date;\n    private String seatClass;\n    private String seatNumber;\n    private String price;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "email",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/NotifyInfo.java",
                            "code": "private String email;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderNumber",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/NotifyInfo.java",
                            "code": "private String orderNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "username",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/NotifyInfo.java",
                            "code": "private String username;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/NotifyInfo.java",
                            "code": "private String startingPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/NotifyInfo.java",
                            "code": "private String endPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/NotifyInfo.java",
                            "code": "private String startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "date",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/NotifyInfo.java",
                            "code": "private String date;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/NotifyInfo.java",
                            "code": "private String seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/NotifyInfo.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/NotifyInfo.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "email",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "orderNumber",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "username",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "startingPlace",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "endPlace",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "startingTime",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "date",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "seatClass",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "seatNumber",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "price",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Order",
            "msEntities": [
                {
                    "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                    "name": "Order",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Order {\n    \n    private UUID id;\n\n    private Date boughtDate;\n\n    private Date travelDate;\n\n    private Date travelTime;\n\n    /**\n     * Which Account Bought it\n     */\n    private UUID accountId;\n\n    /**\n     * Tickets bought for whom\n     */\n    private String contactsName;\n\n    private int documentType;\n\n    private String contactsDocumentNumber;\n\n    private String trainNumber;\n\n    private int coachNumber;\n\n    private int seatClass;\n\n    private String seatNumber;\n\n    private String from;\n\n    private String to;\n\n    private int status;\n\n    private String price;\n\n    public Order(){\n        boughtDate \u003d new Date(System.currentTimeMillis());\n        travelDate \u003d new Date(123456789);\n        trainNumber \u003d \"G1235\";\n        coachNumber \u003d 5;\n        seatClass \u003d SeatClass.FIRSTCLASS.getCode();\n        seatNumber \u003d \"5A\";\n        from \u003d \"shanghai\";\n        to \u003d \"taiyuan\";\n        status \u003d OrderStatus.PAID.getCode();\n        price \u003d \"0.0\";\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Order other \u003d (Order) obj;\n        return boughtDate.equals(other.getBoughtDate())\n                \u0026\u0026 travelDate.equals(other.getTravelDate())\n                \u0026\u0026 travelTime.equals(other.getTravelTime())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 contactsName.equals(other.getContactsName())\n                \u0026\u0026 contactsDocumentNumber.equals(other.getContactsDocumentNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType()\n                \u0026\u0026 trainNumber.equals(other.getTrainNumber())\n                \u0026\u0026 coachNumber \u003d\u003d other.getCoachNumber()\n                \u0026\u0026 seatClass \u003d\u003d other.getSeatClass()\n                \u0026\u0026 seatNumber .equals(other.getSeatNumber())\n                \u0026\u0026 from.equals(other.getFrom())\n                \u0026\u0026 to.equals(other.getTo())\n                \u0026\u0026 status \u003d\u003d other.getStatus()\n                \u0026\u0026 price.equals(other.price);\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n\n    public void setTravelDate(int year,int month,int day){\n        Date date \u003d new Date(year,month,day,0,0,0); //NOSONAR\n        this.travelDate \u003d date;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDate",
                            "type": "Date",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private Date boughtDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelTime",
                            "type": "Date",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private Date travelTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsName",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private String contactsName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsDocumentNumber",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private String contactsDocumentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "coachNumber",
                            "type": "INT",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private int coachNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "INT",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private int seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "status",
                            "type": "INT",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private int status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/Order.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "differenceMoney",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                    "name": "Order",
                    "code": "@Data\n@Document(collection \u003d \"orders\")\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Order {\n\n    @Id\n    private UUID id;\n\n    private Date boughtDate;\n\n    private Date travelDate;\n\n    private Date travelTime;\n\n    /**\n     * Which Account Bought it\n     */\n    private UUID accountId;\n\n    /**\n     * Tickets bought for whom\n     */\n    private String contactsName;\n\n    private int documentType;\n\n    private String contactsDocumentNumber;\n\n    private String trainNumber;\n\n    private int coachNumber;\n\n    private int seatClass;\n\n    private String seatNumber;\n\n    private String from;\n\n    private String to;\n\n    private int status;\n\n    private String price;\n\n    public Order(){\n        boughtDate \u003d new Date(System.currentTimeMillis());\n        travelDate \u003d new Date(123456789);\n        trainNumber \u003d \"G1235\";\n        coachNumber \u003d 5;\n        seatClass \u003d SeatClass.FIRSTCLASS.getCode();\n        seatNumber \u003d \"1\";\n        from \u003d \"shanghai\";\n        to \u003d \"taiyuan\";\n        status \u003d OrderStatus.PAID.getCode();\n        price \u003d \"0.0\";\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Order other \u003d (Order) obj;\n        return boughtDate.equals(other.getBoughtDate())\n                \u0026\u0026 travelDate.equals(other.getTravelDate())\n                \u0026\u0026 travelTime.equals(other.getTravelTime())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 contactsName.equals(other.getContactsName())\n                \u0026\u0026 contactsDocumentNumber.equals(other.getContactsDocumentNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType()\n                \u0026\u0026 trainNumber.equals(other.getTrainNumber())\n                \u0026\u0026 coachNumber \u003d\u003d other.getCoachNumber()\n                \u0026\u0026 seatClass \u003d\u003d other.getSeatClass()\n                \u0026\u0026 seatNumber .equals(other.getSeatNumber())\n                \u0026\u0026 from.equals(other.getFrom())\n                \u0026\u0026 to.equals(other.getTo())\n                \u0026\u0026 status \u003d\u003d other.getStatus()\n                \u0026\u0026 price.equals(other.price);\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n\n    public void setTravelDate(int year,int month,int day){\n        Date date \u003d new Date(year,month,day,0,0,0); //NOSONAR\n        this.travelDate \u003d date;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"orders\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "@Id\n    private UUID id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDate",
                            "type": "Date",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private Date boughtDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelTime",
                            "type": "Date",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private Date travelTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsName",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private String contactsName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsDocumentNumber",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private String contactsDocumentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "coachNumber",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private int coachNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private int seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "status",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private int status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Order.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "differenceMoney",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                    "name": "Order",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Order {\n\n    private UUID id;\n\n    private Date boughtDate;\n\n    private Date travelDate;\n\n    private Date travelTime;\n\n    /**\n     * Which Account Bought it\n     */\n    private UUID accountId;\n\n    /**\n     * Tickets bought for whom...\n     */\n    private String contactsName;\n\n    private int documentType;\n\n    private String contactsDocumentNumber;\n\n    private String trainNumber;\n\n    private int coachNumber;\n\n    private int seatClass;\n\n    private String seatNumber;\n\n    private String from;\n\n    private String to;\n\n    private int status;\n\n    private String price;\n\n    public Order(){\n        boughtDate \u003d new Date(System.currentTimeMillis());\n        travelDate \u003d new Date(123456789);\n        trainNumber \u003d \"G1235\";\n        coachNumber \u003d 5;\n        seatClass \u003d SeatClass.FIRSTCLASS.getCode();\n        seatNumber \u003d \"5A\";\n        from \u003d \"shanghai\";\n        to \u003d \"taiyuan\";\n        status \u003d OrderStatus.PAID.getCode();\n        price \u003d \"0.0\";\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Order other \u003d (Order) obj;\n        return boughtDate.equals(other.getBoughtDate())\n                \u0026\u0026 travelDate.equals(other.getTravelDate())\n                \u0026\u0026 travelTime.equals(other.getTravelTime())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 contactsName.equals(other.getContactsName())\n                \u0026\u0026 contactsDocumentNumber.equals(other.getContactsDocumentNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType()\n                \u0026\u0026 trainNumber.equals(other.getTrainNumber())\n                \u0026\u0026 coachNumber \u003d\u003d other.getCoachNumber()\n                \u0026\u0026 seatClass \u003d\u003d other.getSeatClass()\n                \u0026\u0026 seatNumber .equals(other.getSeatNumber())\n                \u0026\u0026 from.equals(other.getFrom())\n                \u0026\u0026 to.equals(other.getTo())\n                \u0026\u0026 status \u003d\u003d other.getStatus()\n                \u0026\u0026 price \u003d\u003d other.price;\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDate",
                            "type": "Date",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private Date boughtDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelTime",
                            "type": "Date",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private Date travelTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsName",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private String contactsName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsDocumentNumber",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private String contactsDocumentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "coachNumber",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private int coachNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private int seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "status",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private int status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Order.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "differenceMoney",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                    "name": "Order",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Order {\n\n    private UUID id;\n\n    private Date boughtDate;\n\n\n    private Date travelDate;\n\n\n    private Date travelTime;\n\n    /**\n     * Which Account Bought it\n     */\n    private UUID accountId;\n\n    /**\n     * Tickets bought for whom....\n     */\n    private String contactsName;\n\n    private int documentType;\n\n    private String contactsDocumentNumber;\n\n    private String trainNumber;\n\n    private int coachNumber;\n\n    private int seatClass;\n\n    private String seatNumber;\n\n    private String from;\n\n    private String to;\n\n    private int status;\n\n    private String price;\n\n    public Order(){\n        boughtDate \u003d new Date(System.currentTimeMillis());\n        travelDate \u003d new Date(123456789);\n        trainNumber \u003d \"G1235\";\n        coachNumber \u003d 5;\n        seatClass \u003d SeatClass.FIRSTCLASS.getCode();\n        seatNumber \u003d \"5A\";\n        from \u003d \"上海\";\n        to \u003d \"太原\";\n        status \u003d OrderStatus.PAID.getCode();\n        price \u003d \"0.0\";\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Order other \u003d (Order) obj;\n        return boughtDate.equals(other.getBoughtDate())\n                \u0026\u0026 travelDate.equals(other.getTravelDate())\n                \u0026\u0026 travelTime.equals(other.getTravelTime())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 contactsName.equals(other.getContactsName())\n                \u0026\u0026 contactsDocumentNumber.equals(other.getContactsDocumentNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType()\n                \u0026\u0026 trainNumber.equals(other.getTrainNumber())\n                \u0026\u0026 coachNumber \u003d\u003d other.getCoachNumber()\n                \u0026\u0026 seatClass \u003d\u003d other.getSeatClass()\n                \u0026\u0026 seatNumber .equals(other.getSeatNumber())\n                \u0026\u0026 from.equals(other.getFrom())\n                \u0026\u0026 to.equals(other.getTo())\n                \u0026\u0026 status \u003d\u003d other.getStatus()\n                \u0026\u0026 price \u003d\u003d other.price;\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n\n    public void setTravelDate(int year,int month,int day){\n        Date date \u003d new Date(year,month,day,0,0,0); //NOSONAR\n        this.travelDate \u003d date;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDate",
                            "type": "Date",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private Date boughtDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelTime",
                            "type": "Date",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private Date travelTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsName",
                            "type": "String",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private String contactsName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsDocumentNumber",
                            "type": "String",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private String contactsDocumentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "coachNumber",
                            "type": "INT",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private int coachNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "INT",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private int seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "status",
                            "type": "INT",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private int status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-security-service/src/main/java/security/entity/Order.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "differenceMoney",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                    "name": "Order",
                    "code": "@Data\n@Document(collection \u003d \"orders\")\n@ToString\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Order {\n\n    @Id\n    private UUID id;\n\n    private Date boughtDate;\n\n\n    private Date travelDate;\n\n\n    private Date travelTime;\n\n    /**\n     * Which Account Bought it\n     */\n    private UUID accountId;\n\n    /**\n     * Tickets bought for whom....\n     */\n    private String contactsName;\n\n    private int documentType;\n\n    private String contactsDocumentNumber;\n\n    private String trainNumber;\n\n    private int coachNumber;\n\n    private int seatClass;\n\n    private String seatNumber;\n\n    private String from;\n\n    private String to;\n\n    private int status;\n\n    private String price;\n\n\n\n    public Order(){\n        boughtDate \u003d new Date(System.currentTimeMillis());\n        travelDate \u003d new Date(123456789);\n        trainNumber \u003d \"G1235\";\n        coachNumber \u003d 5;\n        seatClass \u003d SeatClass.FIRSTCLASS.getCode();\n        seatNumber \u003d \"1\";\n        from \u003d \"shanghai\";\n        to \u003d \"taiyuan\";\n        status \u003d OrderStatus.PAID.getCode();\n        price \u003d \"0.0\";\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Order other \u003d (Order) obj;\n        return boughtDate.equals(other.getBoughtDate())\n                \u0026\u0026 travelDate.equals(other.getTravelDate())\n                \u0026\u0026 travelTime.equals(other.getTravelTime())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 contactsName.equals(other.getContactsName())\n                \u0026\u0026 contactsDocumentNumber.equals(other.getContactsDocumentNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType()\n                \u0026\u0026 trainNumber.equals(other.getTrainNumber())\n                \u0026\u0026 coachNumber \u003d\u003d other.getCoachNumber()\n                \u0026\u0026 seatClass \u003d\u003d other.getSeatClass()\n                \u0026\u0026 seatNumber .equals(other.getSeatNumber())\n                \u0026\u0026 from.equals(other.getFrom())\n                \u0026\u0026 to.equals(other.getTo())\n                \u0026\u0026 status \u003d\u003d other.getStatus()\n                \u0026\u0026 price.equals(other.price);\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n\n    public void setTravelDate(int year,int month,int day){\n        Date date \u003d new Date(year,month,day,0,0,0); //NOSONAR\n        this.travelDate \u003d date;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"orders\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "@Id\n    private UUID id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDate",
                            "type": "Date",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private Date boughtDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelTime",
                            "type": "Date",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private Date travelTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsName",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private String contactsName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsDocumentNumber",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private String contactsDocumentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "coachNumber",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private int coachNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private int seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "status",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private int status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/Order.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "differenceMoney",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                    "name": "Order",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Order {\n\n    private UUID id;\n\n    private Date boughtDate;\n\n    private Date travelDate;\n\n    private Date travelTime;\n\n    /**\n     * Which Account Bought it\n     */\n    private UUID accountId;\n\n    /**\n     * Tickets bought for whom....\n     */\n    private String contactsName;\n\n    private int documentType;\n\n    private String contactsDocumentNumber;\n\n    private String trainNumber;\n\n    private int coachNumber;\n\n    private int seatClass;\n\n    private String seatNumber;\n\n    private String from;\n\n    private String to;\n\n    private int status;\n\n    private String price;\n\n    private String differenceMoney;\n\n    public Order(){\n        boughtDate \u003d new Date(System.currentTimeMillis());\n        travelDate \u003d new Date(123456789);\n        trainNumber \u003d \"G1235\";\n        coachNumber \u003d 5;\n        seatClass \u003d SeatClass.FIRSTCLASS.getCode();\n        seatNumber \u003d \"5A\";\n        from \u003d \"shanghai\";\n        to \u003d \"taiyuan\";\n        status \u003d OrderStatus.PAID.getCode();\n        price \u003d \"0.0\";\n        differenceMoney \u003d\"0.0\";\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Order other \u003d (Order) obj;\n        return boughtDate.equals(other.getBoughtDate())\n                \u0026\u0026 travelDate.equals(other.getTravelDate())\n                \u0026\u0026 travelTime.equals(other.getTravelTime())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 contactsName.equals(other.getContactsName())\n                \u0026\u0026 contactsDocumentNumber.equals(other.getContactsDocumentNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType()\n                \u0026\u0026 trainNumber.equals(other.getTrainNumber())\n                \u0026\u0026 coachNumber \u003d\u003d other.getCoachNumber()\n                \u0026\u0026 seatClass \u003d\u003d other.getSeatClass()\n                \u0026\u0026 seatNumber .equals(other.getSeatNumber())\n                \u0026\u0026 from.equals(other.getFrom())\n                \u0026\u0026 to.equals(other.getTo())\n                \u0026\u0026 status \u003d\u003d other.getStatus()\n                \u0026\u0026 price \u003d\u003d other.price;\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n\n    public void setTravelDate(int year,int month,int day){\n        Date date \u003d new Date(year,month,day,0,0,0); //NOSONAR\n        this.travelDate \u003d date;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDate",
                            "type": "Date",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private Date boughtDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelTime",
                            "type": "Date",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private Date travelTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsName",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private String contactsName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsDocumentNumber",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private String contactsDocumentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "coachNumber",
                            "type": "INT",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private int coachNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "INT",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private int seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "status",
                            "type": "INT",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private int status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "differenceMoney",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Order.java",
                            "code": "private String differenceMoney;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                    "name": "Order",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Order {\n\n    private UUID id;\n\n    private Date boughtDate;\n\n    private Date travelDate;\n\n    private Date travelTime;\n\n    /**\n     * Which Account Bought it\n     */\n    private UUID accountId;\n\n    /**\n     * Tickets bought for whom....\n     */\n    private String contactsName;\n\n    private int documentType;\n\n    private String contactsDocumentNumber;\n\n    private String trainNumber;\n\n    private int coachNumber;\n\n    private int seatClass;\n\n    private String seatNumber;\n\n    private String from;\n\n    private String to;\n\n    private int status;\n\n    private String price;\n\n    public Order(){\n        boughtDate \u003d new Date(System.currentTimeMillis());\n        travelDate \u003d new Date(123456789);\n        trainNumber \u003d \"G1235\";\n        coachNumber \u003d 5;\n        seatClass \u003d SeatClass.FIRSTCLASS.getCode();\n        seatNumber \u003d \"5A\";\n        from \u003d \"shanghai\";\n        to \u003d \"taiyuan\";\n        status \u003d OrderStatus.PAID.getCode();\n        price \u003d \"0.0\";\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Order other \u003d (Order) obj;\n        return boughtDate.equals(other.getBoughtDate())\n                \u0026\u0026 travelDate.equals(other.getTravelDate())\n                \u0026\u0026 travelTime.equals(other.getTravelTime())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 contactsName.equals(other.getContactsName())\n                \u0026\u0026 contactsDocumentNumber.equals(other.getContactsDocumentNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType()\n                \u0026\u0026 trainNumber.equals(other.getTrainNumber())\n                \u0026\u0026 coachNumber \u003d\u003d other.getCoachNumber()\n                \u0026\u0026 seatClass \u003d\u003d other.getSeatClass()\n                \u0026\u0026 seatNumber .equals(other.getSeatNumber())\n                \u0026\u0026 from.equals(other.getFrom())\n                \u0026\u0026 to.equals(other.getTo())\n                \u0026\u0026 status \u003d\u003d other.getStatus()\n                \u0026\u0026 price \u003d\u003d other.price;\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n\n    public void setTravelDate(int year,int month,int day){\n        Date date \u003d new Date(year,month,day,0,0,0); //NOSONAR\n        this.travelDate \u003d date;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDate",
                            "type": "Date",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private Date boughtDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelTime",
                            "type": "Date",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private Date travelTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsName",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private String contactsName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsDocumentNumber",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private String contactsDocumentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "coachNumber",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private int coachNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private int seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "status",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private int status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Order.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "differenceMoney",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                    "name": "Order",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Order {\n\n    private UUID id;\n\n    private Date boughtDate;\n\n\n    private Date travelDate;\n\n\n    private Date travelTime;\n\n    /**\n     * Which Account Bought it\n     */\n    private UUID accountId;\n\n    /**\n     * Tickets bought for whom....\n     */\n    private String contactsName;\n\n    private int documentType;\n\n    private String contactsDocumentNumber;\n\n    private String trainNumber;\n\n    private int coachNumber;\n\n    private int seatClass;\n\n    private String seatNumber;\n\n    private String from;\n\n    private String to;\n\n    private int status;\n\n    private String price;\n\n    public Order(){\n        boughtDate \u003d new Date(System.currentTimeMillis());\n        travelDate \u003d new Date(123456789);\n        trainNumber \u003d \"G1235\";\n        coachNumber \u003d 5;\n        seatClass \u003d SeatClass.FIRSTCLASS.getCode();\n        seatNumber \u003d \"5A\";\n        from \u003d \"shanghai\";\n        to \u003d \"太原\";\n        status \u003d OrderStatus.PAID.getCode();\n        price \u003d \"0.0\";\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Order other \u003d (Order) obj;\n        return boughtDate.equals(other.getBoughtDate())\n                \u0026\u0026 travelDate.equals(other.getTravelDate())\n                \u0026\u0026 travelTime.equals(other.getTravelTime())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 contactsName.equals(other.getContactsName())\n                \u0026\u0026 contactsDocumentNumber.equals(other.getContactsDocumentNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType()\n                \u0026\u0026 trainNumber.equals(other.getTrainNumber())\n                \u0026\u0026 coachNumber \u003d\u003d other.getCoachNumber()\n                \u0026\u0026 seatClass \u003d\u003d other.getSeatClass()\n                \u0026\u0026 seatNumber .equals(other.getSeatNumber())\n                \u0026\u0026 from.equals(other.getFrom())\n                \u0026\u0026 to.equals(other.getTo())\n                \u0026\u0026 status \u003d\u003d other.getStatus()\n                \u0026\u0026 price.equals(other.price);\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n\n    public void setTravelDate(int year,int month,int day){\n        Date date \u003d new Date(year,month,day,0,0,0); //NOSONAR\n        this.travelDate \u003d date;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDate",
                            "type": "Date",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private Date boughtDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelTime",
                            "type": "Date",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private Date travelTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsName",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private String contactsName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsDocumentNumber",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private String contactsDocumentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "coachNumber",
                            "type": "INT",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private int coachNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "INT",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private int seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "status",
                            "type": "INT",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private int status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Order.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "differenceMoney",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                    "name": "Order",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Order {\n\n    private UUID id;\n\n    private Date boughtDate;\n\n\n    private Date travelDate;\n\n\n    private Date travelTime;\n\n    /**\n     * Which Account Bought it\n     */\n    private UUID accountId;\n\n    /**\n     * Tickets bought for whom....\n     */\n    private String contactsName;\n\n    private int documentType;\n\n    private String contactsDocumentNumber;\n\n    private String trainNumber;\n\n    private int coachNumber;\n\n    private int seatClass;\n\n    private String seatNumber;\n\n    private String from;\n\n    private String to;\n\n    private int status;\n\n    private String price;\n\n    public Order(){\n        boughtDate \u003d new Date(System.currentTimeMillis());\n        travelDate \u003d new Date(123456789);\n        trainNumber \u003d \"G1235\";\n        coachNumber \u003d 5;\n        seatClass \u003d SeatClass.FIRSTCLASS.getCode();\n        seatNumber \u003d \"5A\";\n        from \u003d \"上海\";\n        to \u003d \"太原\";\n        status \u003d OrderStatus.PAID.getCode();\n        price \u003d \"0.0\";\n    }\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Order other \u003d (Order) obj;\n        return boughtDate.equals(other.getBoughtDate())\n                \u0026\u0026 travelDate.equals(other.getTravelDate())\n                \u0026\u0026 travelTime.equals(other.getTravelTime())\n                \u0026\u0026 accountId .equals( other.getAccountId() )\n                \u0026\u0026 contactsName.equals(other.getContactsName())\n                \u0026\u0026 contactsDocumentNumber.equals(other.getContactsDocumentNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType()\n                \u0026\u0026 trainNumber.equals(other.getTrainNumber())\n                \u0026\u0026 coachNumber \u003d\u003d other.getCoachNumber()\n                \u0026\u0026 seatClass \u003d\u003d other.getSeatClass()\n                \u0026\u0026 seatNumber .equals(other.getSeatNumber())\n                \u0026\u0026 from.equals(other.getFrom())\n                \u0026\u0026 to.equals(other.getTo())\n                \u0026\u0026 status \u003d\u003d other.getStatus()\n                \u0026\u0026 price.equals(other.price);\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n\n    public void setTravelDate(int year,int month,int day){\n        Date date \u003d new Date(year,month,day,0,0,0); //NOSONAR\n        this.travelDate \u003d date;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDate",
                            "type": "Date",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private Date boughtDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelTime",
                            "type": "Date",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private Date travelTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsName",
                            "type": "String",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private String contactsName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsDocumentNumber",
                            "type": "String",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private String contactsDocumentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "coachNumber",
                            "type": "INT",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private int coachNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "INT",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private int seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "status",
                            "type": "INT",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private int status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-execute-service/src/main/java/execute/entity/Order.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "differenceMoney",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                    "name": "Order",
                    "code": "@ToString\n@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class Order {\n\n\n    private UUID id;\n\n    private Date boughtDate;\n\n    private Date travelDate;\n\n    private Date travelTime;\n\n    /**\n     * Which Account Bought it\n     */\n    private UUID accountId;\n\n    /**\n     * Tickets bought for whom\n     */\n    private String contactsName;\n\n    private int documentType;\n\n    private String contactsDocumentNumber;\n\n    private String trainNumber;\n\n    private int coachNumber;\n\n    private int seatClass;\n\n    private String seatNumber;\n\n    private String from;\n\n    private String to;\n\n    private int status;\n\n    private String price;\n\n\n    @Override\n    public boolean equals(Object obj) {\n        if (this \u003d\u003d obj) {\n            return true;\n        }\n        if (obj \u003d\u003d null) {\n            return false;\n        }\n        if (getClass() !\u003d obj.getClass()) {\n            return false;\n        }\n        Order other \u003d (Order) obj;\n        return boughtDate.equals(other.getBoughtDate())\n                \u0026\u0026 travelDate.equals(other.getTravelDate())\n                \u0026\u0026 travelTime.equals(other.getTravelTime())\n                \u0026\u0026 accountId.equals(other.getAccountId())\n                \u0026\u0026 contactsName.equals(other.getContactsName())\n                \u0026\u0026 contactsDocumentNumber.equals(other.getContactsDocumentNumber())\n                \u0026\u0026 documentType \u003d\u003d other.getDocumentType()\n                \u0026\u0026 trainNumber.equals(other.getTrainNumber())\n                \u0026\u0026 coachNumber \u003d\u003d other.getCoachNumber()\n                \u0026\u0026 seatClass \u003d\u003d other.getSeatClass()\n                \u0026\u0026 seatNumber.equals(other.getSeatNumber())\n                \u0026\u0026 from.equals(other.getFrom())\n                \u0026\u0026 to.equals(other.getTo())\n                \u0026\u0026 status \u003d\u003d other.getStatus()\n                \u0026\u0026 price.equals(other.price);\n    }\n\n    @Override\n    public int hashCode() {\n        int result \u003d 17;\n        result \u003d 31 * result + (id \u003d\u003d null ? 0 : id.hashCode());\n        return result;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDate",
                            "type": "Date",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private Date boughtDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelTime",
                            "type": "Date",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private Date travelTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsName",
                            "type": "String",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private String contactsName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "documentType",
                            "type": "INT",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private int documentType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsDocumentNumber",
                            "type": "String",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private String contactsDocumentNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "coachNumber",
                            "type": "INT",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private int coachNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatClass",
                            "type": "INT",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private int seatClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatNumber",
                            "type": "String",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private String seatNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "status",
                            "type": "INT",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private int status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-admin-order-service/src/main/java/adminorder/entity/Order.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "differenceMoney",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "UUID",
                    "annotationsHashSet": [
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "boughtDate",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "travelDate",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "travelTime",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "accountId",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "contactsName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "documentType",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "contactsDocumentNumber",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "trainNumber",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "coachNumber",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "seatClass",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "seatNumber",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "from",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "to",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "status",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "price",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "differenceMoney",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "GetAccountByIdResult",
            "msEntities": [
                {
                    "path": "/ts-cancel-service/src/main/java/cancel/entity/GetAccountByIdResult.java",
                    "name": "GetAccountByIdResult",
                    "code": "@Data\npublic class GetAccountByIdResult {\n\n    private boolean status;\n\n    private String message;\n\n    private Account account;\n\n    public GetAccountByIdResult() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/GetAccountByIdResult.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "message",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/GetAccountByIdResult.java",
                            "code": "private String message;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "account",
                            "type": "Account",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/GetAccountByIdResult.java",
                            "code": "private Account account;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "status",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "message",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "account",
                    "type": "Account",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "GetOrderByIdInfo",
            "msEntities": [
                {
                    "path": "/ts-cancel-service/src/main/java/cancel/entity/GetOrderByIdInfo.java",
                    "name": "GetOrderByIdInfo",
                    "code": "@Data\npublic class GetOrderByIdInfo {\n\n    private String orderId;\n\n    public GetOrderByIdInfo() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "orderId",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/GetOrderByIdInfo.java",
                            "code": "private String orderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "orderId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "GetAccountByIdInfo",
            "msEntities": [
                {
                    "path": "/ts-cancel-service/src/main/java/cancel/entity/GetAccountByIdInfo.java",
                    "name": "GetAccountByIdInfo",
                    "code": "@Data\npublic class GetAccountByIdInfo {\n\n    private String accountId;\n\n    public GetAccountByIdInfo() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "accountId",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/GetAccountByIdInfo.java",
                            "code": "private String accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "accountId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "VerifyResult",
            "msEntities": [
                {
                    "path": "/ts-cancel-service/src/main/java/cancel/entity/VerifyResult.java",
                    "name": "VerifyResult",
                    "code": "@Data\npublic class VerifyResult {\n\n    private boolean status;\n\n    private String message;\n\n    public VerifyResult() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/VerifyResult.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "message",
                            "type": "String",
                            "path": "/ts-cancel-service/src/main/java/cancel/entity/VerifyResult.java",
                            "code": "private String message;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-rebook-service/src/main/java/rebook/entity/VerifyResult.java",
                    "name": "VerifyResult",
                    "code": "@Data\npublic class VerifyResult {\n\n    private boolean status;\n\n    private String message;\n\n    public VerifyResult() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/VerifyResult.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "message",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/VerifyResult.java",
                            "code": "private String message;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "status",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "message",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Config",
            "msEntities": [
                {
                    "path": "/ts-config-service/src/main/java/config/entity/Config.java",
                    "name": "Config",
                    "code": "@Data\n@Document(collection\u003d\"config\")\npublic class Config {\n    @Valid\n    @Id\n    @NotNull\n    private String name;\n\n    @Valid\n    @NotNull\n    private String value;\n\n    @Valid\n    private String description;\n\n    public Config() {\n        this.name \u003d \"\";\n        this.value \u003d \"\";\n    }\n\n    public Config(String name, String value, String description) {\n        this.name \u003d name;\n        this.value \u003d value;\n        this.description \u003d description;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"config\"",
                    "fields": [
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-config-service/src/main/java/config/entity/Config.java",
                            "code": "@Valid\n    @Id\n    @NotNull\n    private String name;",
                            "annotations": [
                                "@Valid",
                                "@Id",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "path": "/ts-config-service/src/main/java/config/entity/Config.java",
                            "code": "@Valid\n    @NotNull\n    private String value;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "description",
                            "type": "String",
                            "path": "/ts-config-service/src/main/java/config/entity/Config.java",
                            "code": "@Valid\n    private String description;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Config.java",
                    "name": "Config",
                    "code": "@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class Config {\n\n    private String name;\n\n    private String value;\n\n    private String description;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Config.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Config.java",
                            "code": "private String value;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "description",
                            "type": "String",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Config.java",
                            "code": "private String description;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-seat-service/src/main/java/seat/entity/Config.java",
                    "name": "Config",
                    "code": "@Data\npublic class Config {\n\n    private String name;\n\n    private String value;\n\n    private String description;\n\n    public Config() {\n    }\n\n    public Config(String name, String value, String description) {\n        this.name \u003d name;\n        this.value \u003d value;\n        this.description \u003d description;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Config.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Config.java",
                            "code": "private String value;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "description",
                            "type": "String",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Config.java",
                            "code": "private String description;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "name",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull",
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "value",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "description",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid"
                    ],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "AssuranceTypeBean",
            "msEntities": [
                {
                    "path": "/ts-assurance-service/src/main/java/assurance/entity/AssuranceTypeBean.java",
                    "name": "AssuranceTypeBean",
                    "code": "@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class AssuranceTypeBean implements Serializable{\n\n    /**\n     * index of assurance type\n     */\n    private  int index;\n\n    /**\n     * the assurance type name\n     */\n    private String name;\n\n    /**\n     * the price of this type of assurence\n     */\n    private double price;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "index",
                            "type": "INT",
                            "path": "/ts-assurance-service/src/main/java/assurance/entity/AssuranceTypeBean.java",
                            "code": "private  int index;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-assurance-service/src/main/java/assurance/entity/AssuranceTypeBean.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "DOUBLE",
                            "path": "/ts-assurance-service/src/main/java/assurance/entity/AssuranceTypeBean.java",
                            "code": "private double price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "index",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "name",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "price",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "PlainAssurance",
            "msEntities": [
                {
                    "path": "/ts-assurance-service/src/main/java/assurance/entity/PlainAssurance.java",
                    "name": "PlainAssurance",
                    "code": "@Data\n@AllArgsConstructor\npublic class PlainAssurance implements Serializable {\n\n    private UUID id;\n\n    private UUID orderId;\n\n    private  int typeIndex;\n\n    private String typeName;\n\n    private double typePrice;\n\n    public PlainAssurance(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-assurance-service/src/main/java/assurance/entity/PlainAssurance.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "UUID",
                            "path": "/ts-assurance-service/src/main/java/assurance/entity/PlainAssurance.java",
                            "code": "private UUID orderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "typeIndex",
                            "type": "INT",
                            "path": "/ts-assurance-service/src/main/java/assurance/entity/PlainAssurance.java",
                            "code": "private  int typeIndex;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "typeName",
                            "type": "String",
                            "path": "/ts-assurance-service/src/main/java/assurance/entity/PlainAssurance.java",
                            "code": "private String typeName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "typePrice",
                            "type": "DOUBLE",
                            "path": "/ts-assurance-service/src/main/java/assurance/entity/PlainAssurance.java",
                            "code": "private double typePrice;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "orderId",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "typeIndex",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "typeName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "typePrice",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Assurance",
            "msEntities": [
                {
                    "path": "/ts-assurance-service/src/main/java/assurance/entity/Assurance.java",
                    "name": "Assurance",
                    "code": "@Data\n@Document(collection \u003d \"assurance\")\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Assurance {\n\n    @Id\n    private UUID id;\n\n    /**\n     * which order the assurance is related to\n     */\n    @NotNull\n    private UUID orderId;\n\n    /**\n     * the type of assurance\n     */\n    private AssuranceType type;\n\n    public Assurance(){\n        this.orderId \u003d UUID.randomUUID();\n    }\n\n    public Assurance(UUID id, UUID orderId, AssuranceType type){\n        this.id \u003d id;\n        this.orderId \u003d orderId;\n        this.type \u003d type;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"assurance\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-assurance-service/src/main/java/assurance/entity/Assurance.java",
                            "code": "@Id\n    private UUID id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "UUID",
                            "path": "/ts-assurance-service/src/main/java/assurance/entity/Assurance.java",
                            "code": "@NotNull\n    private UUID orderId;",
                            "annotations": [
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "type",
                            "type": "AssuranceType",
                            "path": "/ts-assurance-service/src/main/java/assurance/entity/Assurance.java",
                            "code": "private AssuranceType type;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/Assurance.java",
                    "name": "Assurance",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Assurance {\n\n    private UUID id;\n\n    /**\n     * which order the assurance is related to\n     */\n    @NotNull\n    private UUID orderId;\n\n    /**\n     * the type of assurance\n     */\n    private AssuranceType type;\n\n    public Assurance(){\n        this.orderId \u003d UUID.randomUUID();\n    }\n\n    public Assurance(UUID id, UUID orderId, AssuranceType type){\n        this.id \u003d id;\n        this.orderId \u003d orderId;\n        this.type \u003d type;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Assurance.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "UUID",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Assurance.java",
                            "code": "@NotNull\n    private UUID orderId;",
                            "annotations": [
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "type",
                            "type": "AssuranceType",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Assurance.java",
                            "code": "private AssuranceType type;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Assurance.java",
                    "name": "Assurance",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Assurance {\n\n    private UUID id;\n\n    /**\n     * which order the assurance is related to\n     */\n    @NotNull\n    private UUID orderId;\n\n    /**\n     * the type of assurance\n     */\n    private AssuranceType type;\n\n    public Assurance(){\n        this.orderId \u003d UUID.randomUUID();\n    }\n\n    public Assurance(UUID id, UUID orderId, AssuranceType type){\n        this.id \u003d id;\n        this.orderId \u003d orderId;\n        this.type \u003d type;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Assurance.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "UUID",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Assurance.java",
                            "code": "@NotNull\n    private UUID orderId;",
                            "annotations": [
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "type",
                            "type": "AssuranceType",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Assurance.java",
                            "code": "private AssuranceType type;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "UUID",
                    "annotationsHashSet": [
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "orderId",
                    "type": "UUID",
                    "annotationsHashSet": [
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "type",
                    "type": "AssuranceType",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "LeftTicketInfo",
            "msEntities": [
                {
                    "path": "/ts-order-other-service/src/main/java/other/entity/LeftTicketInfo.java",
                    "name": "LeftTicketInfo",
                    "code": "@Data\npublic class LeftTicketInfo {\n    @Valid\n    @NotNull\n    private Set\u003cTicket\u003e soldTickets;\n\n    public LeftTicketInfo(){\n        //Default Constructor\n    }\n\n    @Override\n    public String toString() {\n        return \"LeftTicketInfo{\" +\n                \"soldTickets\u003d\" + soldTickets +\n                \u0027}\u0027;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "soldTickets",
                            "type": "Set",
                            "path": "/ts-order-other-service/src/main/java/other/entity/LeftTicketInfo.java",
                            "code": "@Valid\n    @NotNull\n    private Set\u003cTicket\u003e soldTickets;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-order-service/src/main/java/order/entity/LeftTicketInfo.java",
                    "name": "LeftTicketInfo",
                    "code": "@Data\npublic class LeftTicketInfo {\n    @Valid\n    @NotNull\n    private Set\u003cTicket\u003e soldTickets;\n\n    public LeftTicketInfo(){\n        //Default Constructor\n    }\n\n    @Override\n    public String toString() {\n        return \"LeftTicketInfo{\" +\n                \"soldTickets\u003d\" + soldTickets +\n                \u0027}\u0027;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "soldTickets",
                            "type": "Set",
                            "path": "/ts-order-service/src/main/java/order/entity/LeftTicketInfo.java",
                            "code": "@Valid\n    @NotNull\n    private Set\u003cTicket\u003e soldTickets;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-seat-service/src/main/java/seat/entity/LeftTicketInfo.java",
                    "name": "LeftTicketInfo",
                    "code": "@Data\npublic class LeftTicketInfo {\n    @Valid\n    @NotNull\n    private Set\u003cTicket\u003e soldTickets;\n\n    public LeftTicketInfo(){\n        //Default Constructor\n    }\n\n    @Override\n    public String toString() {\n        return \"LeftTicketInfo{\" +\n                \"soldTickets\u003d\" + soldTickets +\n                \u0027}\u0027;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "soldTickets",
                            "type": "Set",
                            "path": "/ts-seat-service/src/main/java/seat/entity/LeftTicketInfo.java",
                            "code": "@Valid\n    @NotNull\n    private Set\u003cTicket\u003e soldTickets;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "soldTickets",
                    "type": "Set",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "OrderAlterInfo",
            "msEntities": [
                {
                    "path": "/ts-order-other-service/src/main/java/other/entity/OrderAlterInfo.java",
                    "name": "OrderAlterInfo",
                    "code": "@Data\n@AllArgsConstructor\npublic class OrderAlterInfo {\n\n    private UUID accountId;\n\n    private UUID previousOrderId;\n\n    private String loginToken;\n\n    private Order newOrderInfo;\n\n    public OrderAlterInfo(){\n        newOrderInfo \u003d new Order();\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-order-other-service/src/main/java/other/entity/OrderAlterInfo.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "previousOrderId",
                            "type": "UUID",
                            "path": "/ts-order-other-service/src/main/java/other/entity/OrderAlterInfo.java",
                            "code": "private UUID previousOrderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "loginToken",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/OrderAlterInfo.java",
                            "code": "private String loginToken;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "newOrderInfo",
                            "type": "Order",
                            "path": "/ts-order-other-service/src/main/java/other/entity/OrderAlterInfo.java",
                            "code": "private Order newOrderInfo;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-order-service/src/main/java/order/entity/OrderAlterInfo.java",
                    "name": "OrderAlterInfo",
                    "code": "@Data\n@AllArgsConstructor\npublic class OrderAlterInfo {\n\n    private UUID accountId;\n\n    private UUID previousOrderId;\n\n    private String loginToken;\n\n    private Order newOrderInfo;\n\n    public OrderAlterInfo(){\n        newOrderInfo \u003d new Order();\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderAlterInfo.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "previousOrderId",
                            "type": "UUID",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderAlterInfo.java",
                            "code": "private UUID previousOrderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "loginToken",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderAlterInfo.java",
                            "code": "private String loginToken;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "newOrderInfo",
                            "type": "Order",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderAlterInfo.java",
                            "code": "private Order newOrderInfo;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "accountId",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "previousOrderId",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "loginToken",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "newOrderInfo",
                    "type": "Order",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "SoldTicket",
            "msEntities": [
                {
                    "path": "/ts-order-other-service/src/main/java/other/entity/SoldTicket.java",
                    "name": "SoldTicket",
                    "code": "@Data\npublic class SoldTicket {\n\n    private Date travelDate;\n\n    private String trainNumber;\n\n    private int noSeat;\n\n    private int businessSeat;\n\n    private int firstClassSeat;\n\n    private int secondClassSeat;\n\n    private int hardSeat;\n\n    private int softSeat;\n\n    private int hardBed;\n\n    private int softBed;\n\n    private int highSoftBed;\n\n    public SoldTicket(){\n        noSeat \u003d 0;\n        businessSeat \u003d 0;\n        firstClassSeat \u003d 0;\n        secondClassSeat \u003d 0;\n        hardSeat \u003d 0;\n        softSeat \u003d 0;\n        hardBed \u003d 0;\n        softBed \u003d 0;\n        highSoftBed \u003d 0;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-order-other-service/src/main/java/other/entity/SoldTicket.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/SoldTicket.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "noSeat",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/SoldTicket.java",
                            "code": "private int noSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "businessSeat",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/SoldTicket.java",
                            "code": "private int businessSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "firstClassSeat",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/SoldTicket.java",
                            "code": "private int firstClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "secondClassSeat",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/SoldTicket.java",
                            "code": "private int secondClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "hardSeat",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/SoldTicket.java",
                            "code": "private int hardSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "softSeat",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/SoldTicket.java",
                            "code": "private int softSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "hardBed",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/SoldTicket.java",
                            "code": "private int hardBed;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "softBed",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/SoldTicket.java",
                            "code": "private int softBed;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "highSoftBed",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/SoldTicket.java",
                            "code": "private int highSoftBed;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-order-service/src/main/java/order/entity/SoldTicket.java",
                    "name": "SoldTicket",
                    "code": "@Data\npublic class SoldTicket {\n\n    private Date travelDate;\n\n    private String trainNumber;\n\n    private int noSeat;\n\n    private int businessSeat;\n\n    private int firstClassSeat;\n\n    private int secondClassSeat;\n\n    private int hardSeat;\n\n    private int softSeat;\n\n    private int hardBed;\n\n    private int softBed;\n\n    private int highSoftBed;\n\n    public SoldTicket(){\n        noSeat \u003d 0;\n        businessSeat \u003d 0;\n        firstClassSeat \u003d 0;\n        secondClassSeat \u003d 0;\n        hardSeat \u003d 0;\n        softSeat \u003d 0;\n        hardBed \u003d 0;\n        softBed \u003d 0;\n        highSoftBed \u003d 0;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-order-service/src/main/java/order/entity/SoldTicket.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/SoldTicket.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "noSeat",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/SoldTicket.java",
                            "code": "private int noSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "businessSeat",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/SoldTicket.java",
                            "code": "private int businessSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "firstClassSeat",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/SoldTicket.java",
                            "code": "private int firstClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "secondClassSeat",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/SoldTicket.java",
                            "code": "private int secondClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "hardSeat",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/SoldTicket.java",
                            "code": "private int hardSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "softSeat",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/SoldTicket.java",
                            "code": "private int softSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "hardBed",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/SoldTicket.java",
                            "code": "private int hardBed;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "softBed",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/SoldTicket.java",
                            "code": "private int softBed;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "highSoftBed",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/SoldTicket.java",
                            "code": "private int highSoftBed;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/SoldTicket.java",
                    "name": "SoldTicket",
                    "code": "@Data\npublic class SoldTicket {\n\n    private Date travelDate;\n\n    private String trainNumber;\n\n    private int noSeat;\n\n    private int businessSeat;\n\n    private int firstClassSeat;\n\n    private int secondClassSeat;\n\n    private int hardSeat;\n\n    private int softSeat;\n\n    private int hardBed;\n\n    private int softBed;\n\n    private int highSoftBed;\n\n    public SoldTicket(){\n        noSeat \u003d 0;\n        businessSeat \u003d 0;\n        firstClassSeat \u003d 0;\n        secondClassSeat \u003d 0;\n        hardSeat \u003d 0;\n        softSeat \u003d 0;\n        hardBed \u003d 0;\n        softBed \u003d 0;\n        highSoftBed \u003d 0;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/SoldTicket.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/SoldTicket.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "noSeat",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/SoldTicket.java",
                            "code": "private int noSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "businessSeat",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/SoldTicket.java",
                            "code": "private int businessSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "firstClassSeat",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/SoldTicket.java",
                            "code": "private int firstClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "secondClassSeat",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/SoldTicket.java",
                            "code": "private int secondClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "hardSeat",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/SoldTicket.java",
                            "code": "private int hardSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "softSeat",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/SoldTicket.java",
                            "code": "private int softSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "hardBed",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/SoldTicket.java",
                            "code": "private int hardBed;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "softBed",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/SoldTicket.java",
                            "code": "private int softBed;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "highSoftBed",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/SoldTicket.java",
                            "code": "private int highSoftBed;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/SoldTicket.java",
                    "name": "SoldTicket",
                    "code": "@Data\npublic class SoldTicket {\n\n    private Date travelDate;\n\n    private String trainNumber;\n\n    private int noSeat;\n\n    private int businessSeat;\n\n    private int firstClassSeat;\n\n    private int secondClassSeat;\n\n    private int hardSeat;\n\n    private int softSeat;\n\n    private int hardBed;\n\n    private int softBed;\n\n    private int highSoftBed;\n\n    public SoldTicket(){\n        noSeat \u003d 0;\n        businessSeat \u003d 0;\n        firstClassSeat \u003d 0;\n        secondClassSeat \u003d 0;\n        hardSeat \u003d 0;\n        softSeat \u003d 0;\n        hardBed \u003d 0;\n        softBed \u003d 0;\n        highSoftBed \u003d 0;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-travel-service/src/main/java/travel/entity/SoldTicket.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/SoldTicket.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "noSeat",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/SoldTicket.java",
                            "code": "private int noSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "businessSeat",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/SoldTicket.java",
                            "code": "private int businessSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "firstClassSeat",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/SoldTicket.java",
                            "code": "private int firstClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "secondClassSeat",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/SoldTicket.java",
                            "code": "private int secondClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "hardSeat",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/SoldTicket.java",
                            "code": "private int hardSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "softSeat",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/SoldTicket.java",
                            "code": "private int softSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "hardBed",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/SoldTicket.java",
                            "code": "private int hardBed;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "softBed",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/SoldTicket.java",
                            "code": "private int softBed;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "highSoftBed",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/SoldTicket.java",
                            "code": "private int highSoftBed;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "travelDate",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "trainNumber",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "noSeat",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "businessSeat",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "firstClassSeat",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "secondClassSeat",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "hardSeat",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "softSeat",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "hardBed",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "softBed",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "highSoftBed",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "QueryInfo",
            "msEntities": [
                {
                    "path": "/ts-order-other-service/src/main/java/other/entity/QueryInfo.java",
                    "name": "QueryInfo",
                    "code": "@Data\npublic class QueryInfo {\n\n    /**\n     * account id\n     */\n    private String loginId;\n\n    private Date travelDateStart;\n\n    private Date travelDateEnd;\n\n    private Date boughtDateStart;\n\n    private Date boughtDateEnd;\n\n    private int state;\n\n    private boolean enableTravelDateQuery;\n\n    private boolean enableBoughtDateQuery;\n\n    private boolean enableStateQuery;\n\n    public QueryInfo() {\n        //Default Constructor\n    }\n\n    public void enableTravelDateQuery(Date startTime, Date endTime) {\n        enableTravelDateQuery \u003d true;\n        travelDateStart \u003d startTime;\n        travelDateEnd \u003d endTime;\n    }\n\n    public void disableTravelDateQuery() {\n        enableTravelDateQuery \u003d false;\n        travelDateStart \u003d null;\n        travelDateEnd \u003d null;\n    }\n\n    public void enableBoughtDateQuery(Date startTime, Date endTime) {\n        enableBoughtDateQuery \u003d true;\n        boughtDateStart \u003d startTime;\n        boughtDateEnd \u003d endTime;\n    }\n\n    public void disableBoughtDateQuery() {\n        enableBoughtDateQuery \u003d false;\n        boughtDateStart \u003d null;\n        boughtDateEnd \u003d null;\n    }\n\n    public void enableStateQuery(int targetStatus) {\n        enableStateQuery \u003d true;\n        state \u003d targetStatus;\n    }\n\n    public void disableStateQuery() {\n        enableTravelDateQuery \u003d false;\n        state \u003d -1;\n    }\n\n    public boolean isEnableTravelDateQuery() {\n        return enableTravelDateQuery;\n    }\n\n    public boolean isEnableBoughtDateQuery() {\n        return enableBoughtDateQuery;\n    }\n\n    public boolean isEnableStateQuery() {\n        return enableStateQuery;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "loginId",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/QueryInfo.java",
                            "code": "private String loginId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDateStart",
                            "type": "Date",
                            "path": "/ts-order-other-service/src/main/java/other/entity/QueryInfo.java",
                            "code": "private Date travelDateStart;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDateEnd",
                            "type": "Date",
                            "path": "/ts-order-other-service/src/main/java/other/entity/QueryInfo.java",
                            "code": "private Date travelDateEnd;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDateStart",
                            "type": "Date",
                            "path": "/ts-order-other-service/src/main/java/other/entity/QueryInfo.java",
                            "code": "private Date boughtDateStart;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDateEnd",
                            "type": "Date",
                            "path": "/ts-order-other-service/src/main/java/other/entity/QueryInfo.java",
                            "code": "private Date boughtDateEnd;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "state",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/QueryInfo.java",
                            "code": "private int state;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "enableTravelDateQuery",
                            "type": "BOOLEAN",
                            "path": "/ts-order-other-service/src/main/java/other/entity/QueryInfo.java",
                            "code": "private boolean enableTravelDateQuery;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "enableBoughtDateQuery",
                            "type": "BOOLEAN",
                            "path": "/ts-order-other-service/src/main/java/other/entity/QueryInfo.java",
                            "code": "private boolean enableBoughtDateQuery;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "enableStateQuery",
                            "type": "BOOLEAN",
                            "path": "/ts-order-other-service/src/main/java/other/entity/QueryInfo.java",
                            "code": "private boolean enableStateQuery;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "loginId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "travelDateStart",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "travelDateEnd",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "boughtDateStart",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "boughtDateEnd",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "state",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "enableTravelDateQuery",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "enableBoughtDateQuery",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "enableStateQuery",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Seat",
            "msEntities": [
                {
                    "path": "/ts-order-other-service/src/main/java/other/entity/Seat.java",
                    "name": "Seat",
                    "code": "@Data\n@AllArgsConstructor\npublic class Seat {\n    @Valid\n    @NotNull\n    private Date travelDate;\n\n    @Valid\n    @NotNull\n    private String trainNumber;\n\n    @Valid\n    @NotNull\n    private String startStation;\n\n    @Valid\n    @NotNull\n    private String destStation;\n\n    @Valid\n    @NotNull\n    private int seatType;\n\n    public Seat(){\n        //Default Constructor\n        this.travelDate \u003d new Date();\n        this.trainNumber \u003d \"\";\n        this.startStation \u003d \"\";\n        this.destStation \u003d \"\";\n        this.seatType \u003d 0;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private Date travelDate;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String trainNumber;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String startStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String destStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatType",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private int seatType;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/Seat.java",
                    "name": "Seat",
                    "code": "@Data\n@AllArgsConstructor\npublic class Seat {\n\n    private Date travelDate;\n\n    private String trainNumber;\n\n    private String startStation;\n\n    private String destStation;\n\n    private int seatType;\n\n    public Seat(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Seat.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Seat.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Seat.java",
                            "code": "private String startStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Seat.java",
                            "code": "private String destStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatType",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Seat.java",
                            "code": "private int seatType;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-order-service/src/main/java/order/entity/Seat.java",
                    "name": "Seat",
                    "code": "@Data\npublic class Seat {\n    @Valid\n    @NotNull\n    private Date travelDate;\n\n    @Valid\n    @NotNull\n    private String trainNumber;\n\n    @Valid\n    @NotNull\n    private String startStation;\n\n    @Valid\n    @NotNull\n    private String destStation;\n\n    @Valid\n    @NotNull\n    private int seatType;\n\n    public Seat(){\n        //Default Constructor\n        this.travelDate \u003d new Date();\n        this.trainNumber \u003d \"\";\n        this.startStation \u003d \"\";\n        this.destStation \u003d \"\";\n        this.seatType \u003d 0;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-order-service/src/main/java/order/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private Date travelDate;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String trainNumber;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String startStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String destStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatType",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private int seatType;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-rebook-service/src/main/java/rebook/entity/Seat.java",
                    "name": "Seat",
                    "code": "@Data\n@AllArgsConstructor\npublic class Seat {\n    @Valid\n    @NotNull\n    private Date travelDate;\n\n    @Valid\n    @NotNull\n    private String trainNumber;\n\n\n    @Valid\n    @NotNull\n    private String startStation;\n\n    @Valid\n    @NotNull\n    private String destStation;\n\n    @Valid\n    @NotNull\n    private int seatType;\n\n    public Seat(){\n        //Default Constructor\n        this.travelDate \u003d new Date();\n        this.trainNumber \u003d \"\";\n        this.startStation \u003d \"\";\n        this.destStation \u003d \"\";\n        this.seatType \u003d 0;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private Date travelDate;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String trainNumber;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String startStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String destStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatType",
                            "type": "INT",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private int seatType;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Seat.java",
                    "name": "Seat",
                    "code": "@Data\n@AllArgsConstructor\npublic class Seat {\n\n    private Date travelDate;\n\n    private String trainNumber;\n\n    private String startStation;\n\n    private String destStation;\n\n    private int seatType;\n\n    public Seat(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Seat.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Seat.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Seat.java",
                            "code": "private String startStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Seat.java",
                            "code": "private String destStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatType",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Seat.java",
                            "code": "private int seatType;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-seat-service/src/main/java/seat/entity/Seat.java",
                    "name": "Seat",
                    "code": "@Data\npublic class Seat {\n    @Valid\n    @NotNull\n    private Date travelDate;\n\n    @Valid\n    @NotNull\n    private String trainNumber;\n\n\n    @Valid\n    @NotNull\n    private String startStation;\n\n    @Valid\n    @NotNull\n    private String destStation;\n\n    @Valid\n    @NotNull\n    private int seatType;\n\n    public Seat(){\n        //Default Constructor\n        this.travelDate \u003d new Date();\n        this.trainNumber \u003d \"\";\n        this.startStation \u003d \"\";\n        this.destStation \u003d \"\";\n        this.seatType \u003d 0;\n    }\n\n    @Override\n    public String toString() {\n        return \"Seat{\" +\n                \"travelDate\u003d\" + travelDate +\n                \", trainNumber\u003d\u0027\" + trainNumber + \u0027\\\u0027\u0027 +\n                \", startStation\u003d\u0027\" + startStation + \u0027\\\u0027\u0027 +\n                \", destStation\u003d\u0027\" + destStation + \u0027\\\u0027\u0027 +\n                \", seatType\u003d\" + seatType +\n                \u0027}\u0027;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private Date travelDate;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String trainNumber;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String startStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String destStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatType",
                            "type": "INT",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private int seatType;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Seat.java",
                    "name": "Seat",
                    "code": "@Data\npublic class Seat {\n\n    private Date travelDate;\n\n    private String trainNumber;\n\n    private String startStation;\n\n    private String destStation;\n\n    private int seatType;\n\n    public Seat(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Seat.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Seat.java",
                            "code": "private String trainNumber;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Seat.java",
                            "code": "private String startStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Seat.java",
                            "code": "private String destStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatType",
                            "type": "INT",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Seat.java",
                            "code": "private int seatType;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/Seat.java",
                    "name": "Seat",
                    "code": "@Data\npublic class Seat {\n    @Valid\n    @NotNull\n    private Date travelDate;\n\n    @Valid\n    @NotNull\n    private String trainNumber;\n\n\n    @Valid\n    @NotNull\n    private String startStation;\n\n    @Valid\n    @NotNull\n    private String destStation;\n\n    @Valid\n    @NotNull\n    private int seatType;\n\n    public Seat(){\n        //Default Constructor\n        this.travelDate \u003d new Date();\n        this.trainNumber \u003d \"\";\n        this.startStation \u003d \"\";\n        this.destStation \u003d \"\";\n        this.seatType \u003d 0;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private Date travelDate;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String trainNumber;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String startStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String destStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatType",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private int seatType;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/Seat.java",
                    "name": "Seat",
                    "code": "@Data\npublic class Seat {\n    @Valid\n    @NotNull\n    private Date travelDate;\n\n    @Valid\n    @NotNull\n    private String trainNumber;\n\n\n    @Valid\n    @NotNull\n    private String startStation;\n\n    @Valid\n    @NotNull\n    private String destStation;\n\n    @Valid\n    @NotNull\n    private int seatType;\n\n    public Seat(){\n        //Default Constructor\n        this.travelDate \u003d new Date();\n        this.trainNumber \u003d \"\";\n        this.startStation \u003d \"\";\n        this.destStation \u003d \"\";\n        this.seatType \u003d 0;\n    }\n\n    @Override\n    public String toString() {\n        return \"Seat{\" +\n                \"travelDate\u003d\" + travelDate +\n                \", trainNumber\u003d\u0027\" + trainNumber + \u0027\\\u0027\u0027 +\n                \", startStation\u003d\u0027\" + startStation + \u0027\\\u0027\u0027 +\n                \", destStation\u003d\u0027\" + destStation + \u0027\\\u0027\u0027 +\n                \", seatType\u003d\" + seatType +\n                \u0027}\u0027;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private Date travelDate;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainNumber",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String trainNumber;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String startStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private String destStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatType",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Seat.java",
                            "code": "@Valid\n    @NotNull\n    private int seatType;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "travelDate",
                    "type": "Date",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "trainNumber",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "startStation",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "destStation",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "seatType",
                    "type": "INT",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Ticket",
            "msEntities": [
                {
                    "path": "/ts-order-other-service/src/main/java/other/entity/Ticket.java",
                    "name": "Ticket",
                    "code": "@Data\npublic class Ticket {\n\n    private int seatNo;\n\n    private String startStation;\n\n    private String destStation;\n\n    public Ticket(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "seatNo",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Ticket.java",
                            "code": "private int seatNo;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Ticket.java",
                            "code": "private String startStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-order-other-service/src/main/java/other/entity/Ticket.java",
                            "code": "private String destStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/Ticket.java",
                    "name": "Ticket",
                    "code": "@Data\npublic class Ticket {\n\n    private int seatNo;\n\n    private String startStation;\n\n    private String destStation;\n\n    public Ticket(){\n        //Default Constructor.\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "seatNo",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Ticket.java",
                            "code": "private int seatNo;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Ticket.java",
                            "code": "private String startStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Ticket.java",
                            "code": "private String destStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-order-service/src/main/java/order/entity/Ticket.java",
                    "name": "Ticket",
                    "code": "@Data\npublic class Ticket {\n\n    private int seatNo;\n\n    private String startStation;\n\n    private String destStation;\n\n    public Ticket(){\n\n    }\n\n    public Ticket(int seatNo, String startStation, String destStation) {\n        this.seatNo \u003d seatNo;\n        this.startStation \u003d startStation;\n        this.destStation \u003d destStation;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "seatNo",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/Ticket.java",
                            "code": "private int seatNo;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/Ticket.java",
                            "code": "private String startStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/Ticket.java",
                            "code": "private String destStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-rebook-service/src/main/java/rebook/entity/Ticket.java",
                    "name": "Ticket",
                    "code": "@Data\npublic class Ticket {\n\n    private int seatNo;\n\n    private String startStation;\n\n    private String destStation;\n\n    public Ticket(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "seatNo",
                            "type": "INT",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Ticket.java",
                            "code": "private int seatNo;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Ticket.java",
                            "code": "private String startStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Ticket.java",
                            "code": "private String destStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Ticket.java",
                    "name": "Ticket",
                    "code": "@Data\npublic class Ticket {\n\n    private int seatNo;\n\n    private String startStation;\n\n    private String destStation;\n\n    public Ticket(){\n        //Default Constructor.\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "seatNo",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Ticket.java",
                            "code": "private int seatNo;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Ticket.java",
                            "code": "private String startStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Ticket.java",
                            "code": "private String destStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-seat-service/src/main/java/seat/entity/Ticket.java",
                    "name": "Ticket",
                    "code": "@Data\npublic class Ticket {\n\n    private int seatNo;\n\n    private String startStation;\n\n    private String destStation;\n\n    public Ticket(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "seatNo",
                            "type": "INT",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Ticket.java",
                            "code": "private int seatNo;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Ticket.java",
                            "code": "private String startStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "destStation",
                            "type": "String",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Ticket.java",
                            "code": "private String destStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "seatNo",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "startStation",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "destStation",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "OrderSecurity",
            "msEntities": [
                {
                    "path": "/ts-order-other-service/src/main/java/other/entity/OrderSecurity.java",
                    "name": "OrderSecurity",
                    "code": "@Data\n@AllArgsConstructor\npublic class OrderSecurity {\n\n    private int orderNumInLastOneHour;\n\n    private int orderNumOfValidOrder;\n\n    public OrderSecurity() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "orderNumInLastOneHour",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/OrderSecurity.java",
                            "code": "private int orderNumInLastOneHour;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderNumOfValidOrder",
                            "type": "INT",
                            "path": "/ts-order-other-service/src/main/java/other/entity/OrderSecurity.java",
                            "code": "private int orderNumOfValidOrder;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-security-service/src/main/java/security/entity/OrderSecurity.java",
                    "name": "OrderSecurity",
                    "code": "@Data\n@AllArgsConstructor\npublic class OrderSecurity {\n\n    private int orderNumInLastOneHour;\n\n    private int orderNumOfValidOrder;\n\n    public OrderSecurity() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "orderNumInLastOneHour",
                            "type": "INT",
                            "path": "/ts-security-service/src/main/java/security/entity/OrderSecurity.java",
                            "code": "private int orderNumInLastOneHour;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderNumOfValidOrder",
                            "type": "INT",
                            "path": "/ts-security-service/src/main/java/security/entity/OrderSecurity.java",
                            "code": "private int orderNumOfValidOrder;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-order-service/src/main/java/order/entity/OrderSecurity.java",
                    "name": "OrderSecurity",
                    "code": "@Data\n@AllArgsConstructor\npublic class OrderSecurity {\n\n    private int orderNumInLastOneHour;\n\n    private int orderNumOfValidOrder;\n\n    public OrderSecurity() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "orderNumInLastOneHour",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderSecurity.java",
                            "code": "private int orderNumInLastOneHour;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderNumOfValidOrder",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderSecurity.java",
                            "code": "private int orderNumOfValidOrder;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "orderNumInLastOneHour",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "orderNumOfValidOrder",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Route",
            "msEntities": [
                {
                    "path": "/ts-route-service/src/main/java/route/entity/Route.java",
                    "name": "Route",
                    "code": "@Data\n@AllArgsConstructor\n@Document(collection \u003d \"routes\")\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Route {\n\n    @Id\n    private String id;\n\n    private List\u003cString\u003e stations;\n\n    private List\u003cInteger\u003e distances;\n\n    private String startStationId;\n\n    private String terminalStationId;\n\n    public Route() {\n        //Default Constructor\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"routes\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-route-service/src/main/java/route/entity/Route.java",
                            "code": "@Id\n    private String id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stations",
                            "type": "List",
                            "path": "/ts-route-service/src/main/java/route/entity/Route.java",
                            "code": "private List\u003cString\u003e stations;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "distances",
                            "type": "List",
                            "path": "/ts-route-service/src/main/java/route/entity/Route.java",
                            "code": "private List\u003cInteger\u003e distances;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStationId",
                            "type": "String",
                            "path": "/ts-route-service/src/main/java/route/entity/Route.java",
                            "code": "private String startStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-route-service/src/main/java/route/entity/Route.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-food-service/src/main/java/foodsearch/entity/Route.java",
                    "name": "Route",
                    "code": "@Data\n@Document(collection \u003d \"routes\")\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Route {\n\n    @Id\n    private String id;\n\n    private List\u003cString\u003e stations;\n\n    private List\u003cInteger\u003e distances;\n\n    private String startStationId;\n\n    private String terminalStationId;\n\n    public Route() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"routes\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/Route.java",
                            "code": "@Id\n    private String id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stations",
                            "type": "List",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/Route.java",
                            "code": "private List\u003cString\u003e stations;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "distances",
                            "type": "List",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/Route.java",
                            "code": "private List\u003cInteger\u003e distances;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStationId",
                            "type": "String",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/Route.java",
                            "code": "private String startStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/Route.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Route.java",
                    "name": "Route",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Route {\n\n    private String id;\n\n    private List\u003cString\u003e stations;\n\n    private List\u003cInteger\u003e distances;\n\n    private String startStationId;\n\n    private String terminalStationId;\n\n    public Route() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Route.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stations",
                            "type": "List",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Route.java",
                            "code": "private List\u003cString\u003e stations;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "distances",
                            "type": "List",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Route.java",
                            "code": "private List\u003cInteger\u003e distances;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStationId",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Route.java",
                            "code": "private String startStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Route.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-route-plan-service/src/main/java/plan/entity/Route.java",
                    "name": "Route",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Route {\n\n    private String id;\n\n    private List\u003cString\u003e stations;\n\n    private List\u003cInteger\u003e distances;\n\n    private String startStationId;\n\n    private String terminalStationId;\n\n    public Route() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/Route.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stations",
                            "type": "List",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/Route.java",
                            "code": "private List\u003cString\u003e stations;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "distances",
                            "type": "List",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/Route.java",
                            "code": "private List\u003cInteger\u003e distances;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStationId",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/Route.java",
                            "code": "private String startStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/Route.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-seat-service/src/main/java/seat/entity/Route.java",
                    "name": "Route",
                    "code": "@Data\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Route {\n\n    private String id;\n\n    private List\u003cString\u003e stations;\n\n    private List\u003cInteger\u003e distances;\n\n    private String startStationId;\n\n    private String terminalStationId;\n\n    public Route() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Route.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stations",
                            "type": "List",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Route.java",
                            "code": "private List\u003cString\u003e stations;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "distances",
                            "type": "List",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Route.java",
                            "code": "private List\u003cInteger\u003e distances;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStationId",
                            "type": "String",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Route.java",
                            "code": "private String startStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-seat-service/src/main/java/seat/entity/Route.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/Route.java",
                    "name": "Route",
                    "code": "@Data\n@Document(collection \u003d \"routes\")\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class Route {\n\n    @Id\n    private String id;\n\n    private List\u003cString\u003e stations;\n\n    private List\u003cInteger\u003e distances;\n\n    private String startStationId;\n\n    private String terminalStationId;\n\n    public Route() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"routes\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Route.java",
                            "code": "@Id\n    private String id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stations",
                            "type": "List",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Route.java",
                            "code": "private List\u003cString\u003e stations;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "distances",
                            "type": "List",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Route.java",
                            "code": "private List\u003cInteger\u003e distances;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStationId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Route.java",
                            "code": "private String startStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Route.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/Route.java",
                    "name": "Route",
                    "code": "@Data\npublic class Route {\n\n    private String id;\n\n    private List\u003cString\u003e stations;\n\n    private List\u003cInteger\u003e distances;\n\n    private String startStationId;\n\n    private String terminalStationId;\n\n    public Route() {\n        //Default Constructor\n    }\n\n    @Override\n    public String toString() {\n        return \"Route{\" +\n                \"id\u003d\u0027\" + id + \u0027\\\u0027\u0027 +\n                \", stations\u003d\" + stations +\n                \", distances\u003d\" + distances +\n                \", startStationId\u003d\u0027\" + startStationId + \u0027\\\u0027\u0027 +\n                \", terminalStationId\u003d\u0027\" + terminalStationId + \u0027\\\u0027\u0027 +\n                \u0027}\u0027;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Route.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stations",
                            "type": "List",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Route.java",
                            "code": "private List\u003cString\u003e stations;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "distances",
                            "type": "List",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Route.java",
                            "code": "private List\u003cInteger\u003e distances;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStationId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Route.java",
                            "code": "private String startStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Route.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Route.java",
                    "name": "Route",
                    "code": "@Data\n@NoArgsConstructor\npublic class Route {\n\n    private String id;\n\n    private List\u003cString\u003e stations;\n\n    private List\u003cInteger\u003e distances;\n\n    private String startStationId;\n\n    private String terminalStationId;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Route.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stations",
                            "type": "List",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Route.java",
                            "code": "private List\u003cString\u003e stations;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "distances",
                            "type": "List",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Route.java",
                            "code": "private List\u003cInteger\u003e distances;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStationId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Route.java",
                            "code": "private String startStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Route.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-admin-route-service/src/main/java/adminroute/entity/Route.java",
                    "name": "Route",
                    "code": "@Data\n@NoArgsConstructor\npublic class Route {\n\n    private String id;\n\n    private List\u003cString\u003e stations;\n\n    private List\u003cInteger\u003e distances;\n\n    private String startStationId;\n\n    private String terminalStationId;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-admin-route-service/src/main/java/adminroute/entity/Route.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stations",
                            "type": "List",
                            "path": "/ts-admin-route-service/src/main/java/adminroute/entity/Route.java",
                            "code": "private List\u003cString\u003e stations;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "distances",
                            "type": "List",
                            "path": "/ts-admin-route-service/src/main/java/adminroute/entity/Route.java",
                            "code": "private List\u003cInteger\u003e distances;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStationId",
                            "type": "String",
                            "path": "/ts-admin-route-service/src/main/java/adminroute/entity/Route.java",
                            "code": "private String startStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-admin-route-service/src/main/java/adminroute/entity/Route.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "stations",
                    "type": "List",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "distances",
                    "type": "List",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "startStationId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "terminalStationId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "RouteInfo",
            "msEntities": [
                {
                    "path": "/ts-route-service/src/main/java/route/entity/RouteInfo.java",
                    "name": "RouteInfo",
                    "code": "@Data\n@AllArgsConstructor\npublic class RouteInfo {\n    private String id;\n\n    private String startStation;\n\n    private String endStation;\n\n    private String stationList;\n\n    private String distanceList;\n\n    public RouteInfo() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-route-service/src/main/java/route/entity/RouteInfo.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-route-service/src/main/java/route/entity/RouteInfo.java",
                            "code": "private String startStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endStation",
                            "type": "String",
                            "path": "/ts-route-service/src/main/java/route/entity/RouteInfo.java",
                            "code": "private String endStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationList",
                            "type": "String",
                            "path": "/ts-route-service/src/main/java/route/entity/RouteInfo.java",
                            "code": "private String stationList;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "distanceList",
                            "type": "String",
                            "path": "/ts-route-service/src/main/java/route/entity/RouteInfo.java",
                            "code": "private String distanceList;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "loginId",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-admin-route-service/src/main/java/adminroute/entity/RouteInfo.java",
                    "name": "RouteInfo",
                    "code": "@Data\n@NoArgsConstructor\npublic class RouteInfo {\n    private String loginId;\n\n    private String startStation;\n\n    private String endStation;\n\n    private String stationList;\n\n    private String distanceList;\n\n    private String id;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "loginId",
                            "type": "String",
                            "path": "/ts-admin-route-service/src/main/java/adminroute/entity/RouteInfo.java",
                            "code": "private String loginId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startStation",
                            "type": "String",
                            "path": "/ts-admin-route-service/src/main/java/adminroute/entity/RouteInfo.java",
                            "code": "private String startStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endStation",
                            "type": "String",
                            "path": "/ts-admin-route-service/src/main/java/adminroute/entity/RouteInfo.java",
                            "code": "private String endStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationList",
                            "type": "String",
                            "path": "/ts-admin-route-service/src/main/java/adminroute/entity/RouteInfo.java",
                            "code": "private String stationList;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "distanceList",
                            "type": "String",
                            "path": "/ts-admin-route-service/src/main/java/adminroute/entity/RouteInfo.java",
                            "code": "private String distanceList;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-admin-route-service/src/main/java/adminroute/entity/RouteInfo.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "startStation",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "endStation",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "stationList",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "distanceList",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "loginId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "PriceConfig",
            "msEntities": [
                {
                    "path": "/ts-price-service/src/main/java/price/entity/PriceConfig.java",
                    "name": "PriceConfig",
                    "code": "@Data\n@AllArgsConstructor\n@Document(collection\u003d\"price_config\")\npublic class PriceConfig {\n\n    @Id\n    private UUID id;\n\n    private String trainType;\n\n    private String routeId;\n\n    private double basicPriceRate;\n\n    private double firstClassPriceRate;\n\n    public PriceConfig() {\n        //Empty Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"price_config\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-price-service/src/main/java/price/entity/PriceConfig.java",
                            "code": "@Id\n    private UUID id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainType",
                            "type": "String",
                            "path": "/ts-price-service/src/main/java/price/entity/PriceConfig.java",
                            "code": "private String trainType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-price-service/src/main/java/price/entity/PriceConfig.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "basicPriceRate",
                            "type": "DOUBLE",
                            "path": "/ts-price-service/src/main/java/price/entity/PriceConfig.java",
                            "code": "private double basicPriceRate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "firstClassPriceRate",
                            "type": "DOUBLE",
                            "path": "/ts-price-service/src/main/java/price/entity/PriceConfig.java",
                            "code": "private double firstClassPriceRate;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/PriceConfig.java",
                    "name": "PriceConfig",
                    "code": "@Data\n@AllArgsConstructor\npublic class PriceConfig {\n\n    private UUID id;\n\n    private String trainType;\n\n    private String routeId;\n\n    private double basicPriceRate;\n\n    private double firstClassPriceRate;\n\n    public PriceConfig() {\n        //Empty Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/PriceConfig.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainType",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/PriceConfig.java",
                            "code": "private String trainType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/PriceConfig.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "basicPriceRate",
                            "type": "DOUBLE",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/PriceConfig.java",
                            "code": "private double basicPriceRate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "firstClassPriceRate",
                            "type": "DOUBLE",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/PriceConfig.java",
                            "code": "private double firstClassPriceRate;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "UUID",
                    "annotationsHashSet": [
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "trainType",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "routeId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "basicPriceRate",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "firstClassPriceRate",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "TrainType",
            "msEntities": [
                {
                    "path": "/ts-price-service/src/main/java/price/entity/TrainType.java",
                    "name": "TrainType",
                    "code": "@Data\npublic class TrainType {\n    @Valid\n    @Id\n    private String id;\n\n    @Valid\n    private int economyClass;\n\n    @Valid\n    private int confortClass;\n\n    private int averageSpeed;\n\n    public TrainType(){\n        //Default Constructor\n    }\n\n    public TrainType(String id, int economyClass, int confortClass) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n    }\n\n    public TrainType(String id, int economyClass, int confortClass, int averageSpeed) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n        this.averageSpeed \u003d averageSpeed;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-price-service/src/main/java/price/entity/TrainType.java",
                            "code": "@Valid\n    @Id\n    private String id;",
                            "annotations": [
                                "@Valid",
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-price-service/src/main/java/price/entity/TrainType.java",
                            "code": "@Valid\n    private int economyClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-price-service/src/main/java/price/entity/TrainType.java",
                            "code": "@Valid\n    private int confortClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "averageSpeed",
                            "type": "INT",
                            "path": "/ts-price-service/src/main/java/price/entity/TrainType.java",
                            "code": "private int averageSpeed;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/TrainType.java",
                    "name": "TrainType",
                    "code": "@Data\npublic class TrainType {\n    @Valid\n    private String id;\n\n    @Valid\n    private int economyClass;\n\n    @Valid\n    private int confortClass;\n\n    public TrainType(){\n        //Default Constructor\n    }\n\n    public TrainType(String id, int economyClass, int confortClass) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TrainType.java",
                            "code": "@Valid\n    private String id;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TrainType.java",
                            "code": "@Valid\n    private int economyClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TrainType.java",
                            "code": "@Valid\n    private int confortClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "averageSpeed",
                            "type": "INT",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-train-service/src/main/java/train/entity/TrainType.java",
                    "name": "TrainType",
                    "code": "@Data\n@Document(collection\u003d\"trainType\")\npublic class TrainType {\n    @Valid\n    @Id\n    private String id;\n\n    @Valid\n    private int economyClass;\n    @Valid\n    private int confortClass;\n\n    private int averageSpeed;\n\n    public TrainType(){\n        //Default Constructor\n    }\n\n    public TrainType(String id, int economyClass, int confortClass) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n    }\n\n    public TrainType(String id, int economyClass, int confortClass, int averageSpeed) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n        this.averageSpeed \u003d averageSpeed;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"trainType\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-train-service/src/main/java/train/entity/TrainType.java",
                            "code": "@Valid\n    @Id\n    private String id;",
                            "annotations": [
                                "@Valid",
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-train-service/src/main/java/train/entity/TrainType.java",
                            "code": "@Valid\n    private int economyClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-train-service/src/main/java/train/entity/TrainType.java",
                            "code": "@Valid\n    private int confortClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "averageSpeed",
                            "type": "INT",
                            "path": "/ts-train-service/src/main/java/train/entity/TrainType.java",
                            "code": "private int averageSpeed;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/TrainType.java",
                    "name": "TrainType",
                    "code": "@Data\npublic class TrainType {\n\n    private String id;\n\n    private int economyClass;\n\n    private int confortClass;\n\n    private int averageSpeed;\n\n    public TrainType(){\n        //Default Constructor\n    }\n\n    public TrainType(String id, int economyClass, int confortClass) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n    }\n\n    public TrainType(String id, int economyClass, int confortClass, int averageSpeed) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n        this.averageSpeed \u003d averageSpeed;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/TrainType.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/TrainType.java",
                            "code": "private int economyClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/TrainType.java",
                            "code": "private int confortClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "averageSpeed",
                            "type": "INT",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/TrainType.java",
                            "code": "private int averageSpeed;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/TrainType.java",
                    "name": "TrainType",
                    "code": "@Data\npublic class TrainType {\n\n    private String id;\n\n    private int economyClass;\n\n    private int confortClass;\n\n    private int averageSpeed;\n\n    public TrainType(){\n\n    }\n\n    public TrainType(String id, int economyClass, int confortClass) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/TrainType.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/TrainType.java",
                            "code": "private int economyClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/TrainType.java",
                            "code": "private int confortClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "averageSpeed",
                            "type": "INT",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/TrainType.java",
                            "code": "private int averageSpeed;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TrainType.java",
                    "name": "TrainType",
                    "code": "@Data\npublic class TrainType {\n    @Valid\n    private String id;\n\n    @Valid\n    private int economyClass;\n\n    @Valid\n    private int confortClass;\n\n    public TrainType(){\n        //Default Constructor\n    }\n\n    public TrainType(String id, int economyClass, int confortClass) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TrainType.java",
                            "code": "@Valid\n    private String id;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TrainType.java",
                            "code": "@Valid\n    private int economyClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TrainType.java",
                            "code": "@Valid\n    private int confortClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "averageSpeed",
                            "type": "INT",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TrainType.java",
                    "name": "TrainType",
                    "code": "@Data\npublic class TrainType {\n\n    private String id;\n\n    private int economyClass;\n    private int confortClass;\n\n    private int averageSpeed;\n\n    public TrainType(){\n\n    }\n\n    public TrainType(String id, int economyClass, int confortClass) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TrainType.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TrainType.java",
                            "code": "private int economyClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TrainType.java",
                            "code": "private int confortClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "averageSpeed",
                            "type": "INT",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TrainType.java",
                            "code": "private int averageSpeed;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-seat-service/src/main/java/seat/entity/TrainType.java",
                    "name": "TrainType",
                    "code": "@Data\npublic class TrainType {\n    @Valid\n    private String id;\n\n    @Valid\n    private int economyClass;\n\n    @Valid\n    private int confortClass;\n\n    private int averageSpeed;\n\n    public TrainType(){\n        //Default Constructor\n    }\n\n    public TrainType(String id, int economyClass, int confortClass) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n    }\n\n    public TrainType(String id, int economyClass, int confortClass, int averageSpeed) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n        this.averageSpeed \u003d averageSpeed;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-seat-service/src/main/java/seat/entity/TrainType.java",
                            "code": "@Valid\n    private String id;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-seat-service/src/main/java/seat/entity/TrainType.java",
                            "code": "@Valid\n    private int economyClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-seat-service/src/main/java/seat/entity/TrainType.java",
                            "code": "@Valid\n    private int confortClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "averageSpeed",
                            "type": "INT",
                            "path": "/ts-seat-service/src/main/java/seat/entity/TrainType.java",
                            "code": "private int averageSpeed;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/TrainType.java",
                    "name": "TrainType",
                    "code": "@Data\n@Document(collection\u003d\"trainType\")\npublic class TrainType {\n    @Valid\n    @Id\n    private String id;\n\n    @Valid\n    private int economyClass;\n    @Valid\n    private int confortClass;\n\n    private int averageSpeed;\n\n    public TrainType(){\n        //Default Constructor\n    }\n\n    public TrainType(String id, int economyClass, int confortClass) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n    }\n\n    public TrainType(String id, int economyClass, int confortClass, int averageSpeed) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n        this.averageSpeed \u003d averageSpeed;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"trainType\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TrainType.java",
                            "code": "@Valid\n    @Id\n    private String id;",
                            "annotations": [
                                "@Valid",
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TrainType.java",
                            "code": "@Valid\n    private int economyClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TrainType.java",
                            "code": "@Valid\n    private int confortClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "averageSpeed",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TrainType.java",
                            "code": "private int averageSpeed;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/TrainType.java",
                    "name": "TrainType",
                    "code": "@Data\n@Document(collection\u003d\"trainType\")\npublic class TrainType {\n    @Valid\n    @Id\n    private String id;\n\n    @Valid\n    private int economyClass;\n\n    @Valid\n    private int confortClass;\n\n    private int averageSpeed;\n\n    public TrainType(){\n        //Default Constructor\n    }\n\n    public TrainType(String id, int economyClass, int confortClass) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n    }\n\n    public TrainType(String id, int economyClass, int confortClass, int averageSpeed) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n        this.averageSpeed \u003d averageSpeed;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"trainType\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TrainType.java",
                            "code": "@Valid\n    @Id\n    private String id;",
                            "annotations": [
                                "@Valid",
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TrainType.java",
                            "code": "@Valid\n    private int economyClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TrainType.java",
                            "code": "@Valid\n    private int confortClass;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "averageSpeed",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TrainType.java",
                            "code": "private int averageSpeed;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TrainType.java",
                    "name": "TrainType",
                    "code": "@Data\npublic class TrainType {\n\n    private String id;\n\n    private int economyClass;\n\n    private int confortClass;\n\n    private int averageSpeed;\n\n    public TrainType(){\n        //Default Constructor\n    }\n\n    public TrainType(String id, int economyClass, int confortClass) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n    }\n\n    public TrainType(String id, int economyClass, int confortClass, int averageSpeed) {\n        this.id \u003d id;\n        this.economyClass \u003d economyClass;\n        this.confortClass \u003d confortClass;\n        this.averageSpeed \u003d averageSpeed;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TrainType.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TrainType.java",
                            "code": "private int economyClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TrainType.java",
                            "code": "private int confortClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "averageSpeed",
                            "type": "INT",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TrainType.java",
                            "code": "private int averageSpeed;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "economyClass",
                    "type": "INT",
                    "annotationsHashSet": [
                        "@Valid"
                    ],
                    "annotationList": []
                },
                {
                    "name": "confortClass",
                    "type": "INT",
                    "annotationsHashSet": [
                        "@Valid"
                    ],
                    "annotationList": []
                },
                {
                    "name": "averageSpeed",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Consign",
            "msEntities": [
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/Consign.java",
                    "name": "Consign",
                    "code": "@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class Consign {\n\n    private UUID id;\n    private UUID orderId;\n    private UUID accountId;\n    private String handleDate;\n    private String targetDate;\n    private String from;\n    private String to;\n    private String consignee;\n    private String phone;\n    private double weight;\n    private boolean isWithin;\n\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Consign.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "UUID",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Consign.java",
                            "code": "private UUID orderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Consign.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "handleDate",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Consign.java",
                            "code": "private String handleDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "targetDate",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Consign.java",
                            "code": "private String targetDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Consign.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Consign.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "consignee",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Consign.java",
                            "code": "private String consignee;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "phone",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Consign.java",
                            "code": "private String phone;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "weight",
                            "type": "DOUBLE",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Consign.java",
                            "code": "private double weight;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "isWithin",
                            "type": "BOOLEAN",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Consign.java",
                            "code": "private boolean isWithin;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-consign-service/src/main/java/consign/entity/Consign.java",
                    "name": "Consign",
                    "code": "@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class Consign {\n    @Id\n    private UUID id;\n    private UUID orderId;\n    private UUID accountId;\n    private String handleDate;\n    private String targetDate;\n    private String from;\n    private String to;\n    private String consignee;\n    private String phone;\n    private double weight;\n    private boolean isWithin;\n\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-consign-service/src/main/java/consign/entity/Consign.java",
                            "code": "@Id\n    private UUID id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "UUID",
                            "path": "/ts-consign-service/src/main/java/consign/entity/Consign.java",
                            "code": "private UUID orderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-consign-service/src/main/java/consign/entity/Consign.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "handleDate",
                            "type": "String",
                            "path": "/ts-consign-service/src/main/java/consign/entity/Consign.java",
                            "code": "private String handleDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "targetDate",
                            "type": "String",
                            "path": "/ts-consign-service/src/main/java/consign/entity/Consign.java",
                            "code": "private String targetDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-consign-service/src/main/java/consign/entity/Consign.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-consign-service/src/main/java/consign/entity/Consign.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "consignee",
                            "type": "String",
                            "path": "/ts-consign-service/src/main/java/consign/entity/Consign.java",
                            "code": "private String consignee;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "phone",
                            "type": "String",
                            "path": "/ts-consign-service/src/main/java/consign/entity/Consign.java",
                            "code": "private String phone;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "weight",
                            "type": "DOUBLE",
                            "path": "/ts-consign-service/src/main/java/consign/entity/Consign.java",
                            "code": "private double weight;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "isWithin",
                            "type": "BOOLEAN",
                            "path": "/ts-consign-service/src/main/java/consign/entity/Consign.java",
                            "code": "private boolean isWithin;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Consign.java",
                    "name": "Consign",
                    "code": "@Data\n@AllArgsConstructor\n@NoArgsConstructor\npublic class Consign {\n\n    private UUID id;\n    private UUID orderId;\n    private UUID accountId;\n    private String handleDate;\n    private String targetDate;\n    private String from;\n    private String to;\n    private String consignee;\n    private String phone;\n    private double weight;\n    private boolean isWithin;\n\n\n\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Consign.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "UUID",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Consign.java",
                            "code": "private UUID orderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Consign.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "handleDate",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Consign.java",
                            "code": "private String handleDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "targetDate",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Consign.java",
                            "code": "private String targetDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Consign.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Consign.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "consignee",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Consign.java",
                            "code": "private String consignee;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "phone",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Consign.java",
                            "code": "private String phone;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "weight",
                            "type": "DOUBLE",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Consign.java",
                            "code": "private double weight;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "isWithin",
                            "type": "BOOLEAN",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Consign.java",
                            "code": "private boolean isWithin;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "UUID",
                    "annotationsHashSet": [
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "orderId",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "accountId",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "handleDate",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "targetDate",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "from",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "to",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "consignee",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "phone",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "weight",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "isWithin",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "TripResponse",
            "msEntities": [
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/TripResponse.java",
                    "name": "TripResponse",
                    "code": "@Data\npublic class TripResponse {\n    @Valid\n    private TripId tripId;\n\n    @Valid\n    @NotNull\n    private String startingStation;\n\n    @Valid\n    @NotNull\n    private String terminalStation;\n\n    @Valid\n    @NotNull\n    private Date startingTime;\n\n    @Valid\n    @NotNull\n    private Date endTime;\n\n    /**\n     * the number of economy seat\n     */\n    @Valid\n    @NotNull\n    private int economyClass;\n\n    /**\n     * the number of confort seat\n     */\n    @Valid\n    @NotNull\n    private int confortClass;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripResponse.java",
                            "code": "@Valid\n    private TripId tripId;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStation",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String startingStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStation",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String terminalStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private Date startingTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private Date endTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private int economyClass;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private int confortClass;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "annotationsHashSet": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "annotationList": []
                        },
                        {
                            "name": "priceForEconomyClass",
                            "type": "String",
                            "annotationsHashSet": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "annotationList": []
                        },
                        {
                            "name": "priceForConfortClass",
                            "type": "String",
                            "annotationsHashSet": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-rebook-service/src/main/java/rebook/entity/TripResponse.java",
                    "name": "TripResponse",
                    "code": "@Data\npublic class TripResponse {\n    @Valid\n    private TripId tripId;\n\n    @Valid\n    @NotNull\n    private String trainTypeId;\n\n    @Valid\n    @NotNull\n    private String startingStation;\n\n    @Valid\n    @NotNull\n    private String terminalStation;\n\n    @Valid\n    @NotNull\n    private Date startingTime;\n\n    @Valid\n    @NotNull\n    private Date endTime;\n\n    /**\n     * the number of economy seat\n     */\n    @Valid\n    @NotNull\n    private int economyClass;\n\n    /**\n     * the number of confort seat\n     */\n    @Valid\n    @NotNull\n    private int confortClass;\n\n    @Valid\n    @NotNull\n    private String priceForEconomyClass;\n\n    @Valid\n    @NotNull\n    private String priceForConfortClass;\n\n    public TripResponse(){\n        //Default Constructor\n        this.trainTypeId \u003d \"\";\n        this.startingStation \u003d \"\";\n        this.terminalStation \u003d \"\";\n        this.startingTime \u003d new Date();\n        this.endTime \u003d new Date();\n        this.economyClass \u003d 0;\n        this.confortClass \u003d 0;\n        this.priceForEconomyClass \u003d \"\";\n        this.priceForConfortClass \u003d \"\";\n\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripResponse.java",
                            "code": "@Valid\n    private TripId tripId;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String trainTypeId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStation",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String startingStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStation",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String terminalStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private Date startingTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private Date endTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private int economyClass;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private int confortClass;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForEconomyClass",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String priceForEconomyClass;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForConfortClass",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String priceForConfortClass;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripResponse.java",
                    "name": "TripResponse",
                    "code": "@Data\n@ToString\npublic class TripResponse {\n    @Valid\n    private TripId tripId;\n\n    @Valid\n    @NotNull\n    private String startingStation;\n\n    @Valid\n    @NotNull\n    private String terminalStation;\n\n    @Valid\n    @NotNull\n    private Date startingTime;\n\n    @Valid\n    @NotNull\n    private Date endTime;\n\n    /**\n     * The number of economy seat\n     */\n    @Valid\n    @NotNull\n    private int economyClass;\n\n    /**\n     * The number of confort seat\n     */\n    @Valid\n    @NotNull\n    private int confortClass;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripResponse.java",
                            "code": "@Valid\n    private TripId tripId;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStation",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String startingStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStation",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String terminalStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private Date startingTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private Date endTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private int economyClass;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private int confortClass;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "annotationsHashSet": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "annotationList": []
                        },
                        {
                            "name": "priceForEconomyClass",
                            "type": "String",
                            "annotationsHashSet": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "annotationList": []
                        },
                        {
                            "name": "priceForConfortClass",
                            "type": "String",
                            "annotationsHashSet": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-route-plan-service/src/main/java/plan/entity/TripResponse.java",
                    "name": "TripResponse",
                    "code": "@Data\npublic class TripResponse {\n\n    private TripId tripId;\n\n    private String trainTypeId;\n\n    private String startingStation;\n\n    private String terminalStation;\n\n    private Date startingTime;\n\n    private Date endTime;\n\n    private int economyClass;\n\n    private int confortClass;\n\n    private String priceForEconomyClass;\n\n    private String priceForConfortClass;\n\n    public TripResponse(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripResponse.java",
                            "code": "private TripId tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripResponse.java",
                            "code": "private String trainTypeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStation",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripResponse.java",
                            "code": "private String startingStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStation",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripResponse.java",
                            "code": "private String terminalStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripResponse.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripResponse.java",
                            "code": "private Date endTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripResponse.java",
                            "code": "private int economyClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripResponse.java",
                            "code": "private int confortClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForEconomyClass",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripResponse.java",
                            "code": "private String priceForEconomyClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForConfortClass",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripResponse.java",
                            "code": "private String priceForConfortClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripResponse.java",
                    "name": "TripResponse",
                    "code": "@Data\npublic class TripResponse {\n\n    private TripId tripId;\n\n    private String trainTypeId;\n\n    private String startingStation;\n\n    private String terminalStation;\n\n    private Date startingTime;\n\n    private Date endTime;\n\n    private int economyClass;\n\n    private int confortClass;\n\n    private String priceForEconomyClass;\n\n    private String priceForConfortClass;\n\n    public TripResponse(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripResponse.java",
                            "code": "private TripId tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripResponse.java",
                            "code": "private String trainTypeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStation",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripResponse.java",
                            "code": "private String startingStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStation",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripResponse.java",
                            "code": "private String terminalStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripResponse.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripResponse.java",
                            "code": "private Date endTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripResponse.java",
                            "code": "private int economyClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripResponse.java",
                            "code": "private int confortClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForEconomyClass",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripResponse.java",
                            "code": "private String priceForEconomyClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForConfortClass",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripResponse.java",
                            "code": "private String priceForConfortClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/TripResponse.java",
                    "name": "TripResponse",
                    "code": "@Data\npublic class TripResponse {\n    @Valid\n    @Id\n    private TripId tripId;\n\n    @Valid\n    @NotNull\n    private String trainTypeId;\n\n    @Valid\n    @NotNull\n    private String startingStation;\n\n    @Valid\n    @NotNull\n    private String terminalStation;\n\n    @Valid\n    @NotNull\n    private Date startingTime;\n\n    @Valid\n    @NotNull\n    private Date endTime;\n\n    /**\n     * the number of economy seats\n     */\n    @Valid\n    @NotNull\n    private int economyClass;\n\n    /**\n     * the number of confort seats\n     */\n    @Valid\n    @NotNull\n    private int confortClass;\n\n    @Valid\n    @NotNull\n    private String priceForEconomyClass;\n\n    @Valid\n    @NotNull\n    private String priceForConfortClass;\n\n    public TripResponse(){\n        //Default Constructor\n        this.trainTypeId \u003d \"\";\n        this.startingStation \u003d \"\";\n        this.terminalStation \u003d \"\";\n        this.startingTime \u003d new Date();\n        this.endTime \u003d new Date();\n        this.economyClass \u003d 0;\n        this.confortClass \u003d 0;\n        this.priceForEconomyClass \u003d \"\";\n        this.priceForConfortClass \u003d \"\";\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripResponse.java",
                            "code": "@Valid\n    @Id\n    private TripId tripId;",
                            "annotations": [
                                "@Valid",
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String trainTypeId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStation",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String startingStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStation",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String terminalStation;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private Date startingTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private Date endTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private int economyClass;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private int confortClass;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForEconomyClass",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String priceForEconomyClass;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForConfortClass",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripResponse.java",
                            "code": "@Valid\n    @NotNull\n    private String priceForConfortClass;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/TripResponse.java",
                    "name": "TripResponse",
                    "code": "@Data\npublic class TripResponse {\n\n    private TripId tripId;\n\n    private String trainTypeId;\n\n    private String startingStation;\n\n    private String terminalStation;\n\n    private Date startingTime;\n\n    private Date endTime;\n\n    private int economyClass;\n\n    private int confortClass;\n\n    private String priceForEconomyClass;\n\n    private String priceForConfortClass;\n\n    public TripResponse(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripResponse.java",
                            "code": "private TripId tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripResponse.java",
                            "code": "private String trainTypeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStation",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripResponse.java",
                            "code": "private String startingStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStation",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripResponse.java",
                            "code": "private String terminalStation;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripResponse.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripResponse.java",
                            "code": "private Date endTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "economyClass",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripResponse.java",
                            "code": "private int economyClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "confortClass",
                            "type": "INT",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripResponse.java",
                            "code": "private int confortClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForEconomyClass",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripResponse.java",
                            "code": "private String priceForEconomyClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForConfortClass",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripResponse.java",
                            "code": "private String priceForConfortClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "tripId",
                    "type": "TripId",
                    "annotationsHashSet": [
                        "@Valid",
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "startingStation",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "terminalStation",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "startingTime",
                    "type": "Date",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "endTime",
                    "type": "Date",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "economyClass",
                    "type": "INT",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "confortClass",
                    "type": "INT",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "trainTypeId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "priceForEconomyClass",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "priceForConfortClass",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "TripAllDetail",
            "msEntities": [
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/TripAllDetail.java",
                    "name": "TripAllDetail",
                    "code": "@Data\n@AllArgsConstructor\n@ToString\npublic class TripAllDetail {\n\n    private boolean status;\n\n    private String message;\n\n    private TripResponse tripResponse;\n\n    private Trip trip;\n\n    public TripAllDetail() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripAllDetail.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "message",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripAllDetail.java",
                            "code": "private String message;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "tripResponse",
                            "type": "TripResponse",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripAllDetail.java",
                            "code": "private TripResponse tripResponse;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripAllDetail.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-rebook-service/src/main/java/rebook/entity/TripAllDetail.java",
                    "name": "TripAllDetail",
                    "code": "@Data\npublic class TripAllDetail {\n\n    private TripResponse tripResponse;\n\n    private Trip trip;\n\n    public TripAllDetail() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripResponse",
                            "type": "TripResponse",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripAllDetail.java",
                            "code": "private TripResponse tripResponse;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripAllDetail.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "message",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripAllDetail.java",
                    "name": "TripAllDetail",
                    "code": "@Data\n@AllArgsConstructor\n@ToString\npublic class TripAllDetail {\n\n    private boolean status;\n\n    private String message;\n\n    private TripResponse tripResponse;\n\n    private Trip trip;\n\n    public TripAllDetail() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripAllDetail.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "message",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripAllDetail.java",
                            "code": "private String message;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "tripResponse",
                            "type": "TripResponse",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripAllDetail.java",
                            "code": "private TripResponse tripResponse;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripAllDetail.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-route-plan-service/src/main/java/plan/entity/TripAllDetail.java",
                    "name": "TripAllDetail",
                    "code": "@Data\npublic class TripAllDetail {\n\n    private boolean status;\n\n    private String message;\n\n    private TripResponse tripResponse;\n\n    private Trip trip;\n\n    public TripAllDetail() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripAllDetail.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "message",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripAllDetail.java",
                            "code": "private String message;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "tripResponse",
                            "type": "TripResponse",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripAllDetail.java",
                            "code": "private TripResponse tripResponse;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripAllDetail.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/TripAllDetail.java",
                    "name": "TripAllDetail",
                    "code": "@Data\npublic class TripAllDetail {\n\n    private boolean status;\n\n    private String message;\n\n    private TripResponse tripResponse;\n\n    private Trip trip;\n\n    public TripAllDetail() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripAllDetail.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "message",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripAllDetail.java",
                            "code": "private String message;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "tripResponse",
                            "type": "TripResponse",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripAllDetail.java",
                            "code": "private TripResponse tripResponse;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripAllDetail.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/TripAllDetail.java",
                    "name": "TripAllDetail",
                    "code": "@Data\npublic class TripAllDetail {\n    private TripResponse tripResponse;\n\n    private Trip trip;\n\n    public TripAllDetail() {\n    }\n\n    public TripAllDetail(TripResponse tripResponse, Trip trip) {\n        this.tripResponse \u003d tripResponse;\n        this.trip \u003d trip;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripResponse",
                            "type": "TripResponse",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripAllDetail.java",
                            "code": "private TripResponse tripResponse;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripAllDetail.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "message",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                }
            ],
            "uniqueFields": [
                {
                    "name": "status",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "message",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "tripResponse",
                    "type": "TripResponse",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "trip",
                    "type": "Trip",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "OrderTicketsInfo",
            "msEntities": [
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                    "name": "OrderTicketsInfo",
                    "code": "@Data\n@AllArgsConstructor\n@Builder\npublic class OrderTicketsInfo {\n    private String accountId;\n\n    private String contactsId;\n\n    private String tripId;\n\n    private int seatType;\n\n    private Date date;\n\n    private String from;\n\n    private String to;\n\n    private int assurance;\n\n\n    private int foodType \u003d 0;\n\n    private String stationName;\n\n    private String storeName;\n\n    private String foodName;\n\n    private double foodPrice;\n\n\n    private String handleDate;\n\n    private String consigneeName \u003d \"\";\n\n    private String consigneePhone \u003d \"\";\n\n    private double consigneeWeight;\n\n    private boolean isWithin;\n\n\n    public OrderTicketsInfo() {\n        //Default Constructor\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "accountId",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private String accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsId",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private String contactsId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatType",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private int seatType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "date",
                            "type": "Date",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private Date date;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "assurance",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private int assurance;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodType",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private int foodType \u003d 0;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationName",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private String stationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "storeName",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private String storeName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodName",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private String foodName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodPrice",
                            "type": "DOUBLE",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private double foodPrice;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "handleDate",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private String handleDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "consigneeName",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private String consigneeName \u003d \"\";",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "consigneePhone",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private String consigneePhone \u003d \"\";",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "consigneeWeight",
                            "type": "DOUBLE",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private double consigneeWeight;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "isWithin",
                            "type": "BOOLEAN",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsInfo.java",
                            "code": "private boolean isWithin;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "loginToken",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-rebook-service/src/main/java/rebook/entity/OrderTicketsInfo.java",
                    "name": "OrderTicketsInfo",
                    "code": "@Data\npublic class OrderTicketsInfo {\n\n    private String contactsId;\n\n    private String tripId;\n\n    private int seatType;\n\n    private String loginToken;\n\n    private String accountId;\n\n    private Date date;\n\n    private String from;\n\n    private String to;\n\n    public OrderTicketsInfo(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "contactsId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/OrderTicketsInfo.java",
                            "code": "private String contactsId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/OrderTicketsInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatType",
                            "type": "INT",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/OrderTicketsInfo.java",
                            "code": "private int seatType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "loginToken",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/OrderTicketsInfo.java",
                            "code": "private String loginToken;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/OrderTicketsInfo.java",
                            "code": "private String accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "date",
                            "type": "Date",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/OrderTicketsInfo.java",
                            "code": "private Date date;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/OrderTicketsInfo.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/OrderTicketsInfo.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "assurance",
                            "type": "INT",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "foodType",
                            "type": "INT",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "stationName",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "storeName",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "foodName",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "foodPrice",
                            "type": "DOUBLE",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "handleDate",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "consigneeName",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "consigneePhone",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "consigneeWeight",
                            "type": "DOUBLE",
                            "annotationsHashSet": [],
                            "annotationList": []
                        },
                        {
                            "name": "isWithin",
                            "type": "BOOLEAN",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                    "name": "OrderTicketsInfo",
                    "code": "@Data\n@AllArgsConstructor\n@Builder\npublic class OrderTicketsInfo {\n    private String accountId;\n\n    private String contactsId;\n\n    private String tripId;\n\n    private int seatType;\n\n    private Date date;\n\n    private String from;\n\n    private String to;\n\n    private int assurance;\n\n\n    private int foodType \u003d 0;\n\n    private String stationName;\n\n    private String storeName;\n\n    private String foodName;\n\n    private double foodPrice;\n\n\n    private String handleDate;\n\n    private String consigneeName;\n\n    private String consigneePhone;\n\n    private double consigneeWeight;\n\n    private boolean isWithin;\n\n\n    public OrderTicketsInfo(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "accountId",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private String accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "contactsId",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private String contactsId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatType",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private int seatType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "date",
                            "type": "Date",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private Date date;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "assurance",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private int assurance;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodType",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private int foodType \u003d 0;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationName",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private String stationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "storeName",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private String storeName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodName",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private String foodName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodPrice",
                            "type": "DOUBLE",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private double foodPrice;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "handleDate",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private String handleDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "consigneeName",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private String consigneeName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "consigneePhone",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private String consigneePhone;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "consigneeWeight",
                            "type": "DOUBLE",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private double consigneeWeight;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "isWithin",
                            "type": "BOOLEAN",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/OrderTicketsInfo.java",
                            "code": "private boolean isWithin;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "loginToken",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                }
            ],
            "uniqueFields": [
                {
                    "name": "accountId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "contactsId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "tripId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "seatType",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "date",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "from",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "to",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "assurance",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "foodType",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "stationName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "storeName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "foodName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "foodPrice",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "handleDate",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "consigneeName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "consigneePhone",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "consigneeWeight",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "isWithin",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "loginToken",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "FoodOrder",
            "msEntities": [
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/FoodOrder.java",
                    "name": "FoodOrder",
                    "code": "@Data\npublic class FoodOrder {\n\n    private UUID id;\n\n    private UUID orderId;\n\n    /**\n     * 1:train food;2:food store\n     */\n    private int foodType;\n\n    private String stationName;\n\n    private String storeName;\n\n    private String foodName;\n\n    private double price;\n\n    public FoodOrder(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/FoodOrder.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "UUID",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/FoodOrder.java",
                            "code": "private UUID orderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodType",
                            "type": "INT",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/FoodOrder.java",
                            "code": "private int foodType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationName",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/FoodOrder.java",
                            "code": "private String stationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "storeName",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/FoodOrder.java",
                            "code": "private String storeName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodName",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/FoodOrder.java",
                            "code": "private String foodName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "DOUBLE",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/FoodOrder.java",
                            "code": "private double price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodOrder.java",
                    "name": "FoodOrder",
                    "code": "@Data\n@AllArgsConstructor\n@Document(collection \u003d \"foodorder\")\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class FoodOrder {\n\n    @Id\n    private UUID id;\n\n    private UUID orderId;\n\n    //1:train food;2:food store\n    private int foodType;\n\n    private String stationName;\n\n    private String storeName;\n\n    private String foodName;\n\n    private double price;\n\n    public FoodOrder(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"foodorder\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodOrder.java",
                            "code": "@Id\n    private UUID id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "UUID",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodOrder.java",
                            "code": "private UUID orderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodType",
                            "type": "INT",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodOrder.java",
                            "code": "private int foodType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationName",
                            "type": "String",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodOrder.java",
                            "code": "private String stationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "storeName",
                            "type": "String",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodOrder.java",
                            "code": "private String storeName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodName",
                            "type": "String",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodOrder.java",
                            "code": "private String foodName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "DOUBLE",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/FoodOrder.java",
                            "code": "private double price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/FoodOrder.java",
                    "name": "FoodOrder",
                    "code": "@Data\npublic class FoodOrder {\n\n    private UUID id;\n\n    private UUID orderId;\n\n    /**\n     * 1:train food;2:food store\n     */\n    private int foodType;\n\n    private String stationName;\n\n    private String storeName;\n\n    private String foodName;\n\n    private double price;\n\n    public FoodOrder(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/FoodOrder.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "UUID",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/FoodOrder.java",
                            "code": "private UUID orderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodType",
                            "type": "INT",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/FoodOrder.java",
                            "code": "private int foodType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationName",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/FoodOrder.java",
                            "code": "private String stationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "storeName",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/FoodOrder.java",
                            "code": "private String storeName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodName",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/FoodOrder.java",
                            "code": "private String foodName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "DOUBLE",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/FoodOrder.java",
                            "code": "private double price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "UUID",
                    "annotationsHashSet": [
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "orderId",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "foodType",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "stationName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "storeName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "foodName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "price",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "TripAllDetailInfo",
            "msEntities": [
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/TripAllDetailInfo.java",
                    "name": "TripAllDetailInfo",
                    "code": "@Data\npublic class TripAllDetailInfo {\n\n    private String tripId;\n\n    private Date travelDate;\n\n    private String from;\n\n    private String to;\n\n    public TripAllDetailInfo() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripAllDetailInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripAllDetailInfo.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripAllDetailInfo.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripAllDetailInfo.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-rebook-service/src/main/java/rebook/entity/TripAllDetailInfo.java",
                    "name": "TripAllDetailInfo",
                    "code": "@Data\npublic class TripAllDetailInfo {\n\n    private String tripId;\n\n    private Date travelDate;\n\n    private String from;\n\n    private String to;\n\n    public TripAllDetailInfo() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripAllDetailInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripAllDetailInfo.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripAllDetailInfo.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripAllDetailInfo.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripAllDetailInfo.java",
                    "name": "TripAllDetailInfo",
                    "code": "@Data\npublic class TripAllDetailInfo {\n\n    private String tripId;\n\n    private Date travelDate;\n\n    private String from;\n\n    private String to;\n\n    public TripAllDetailInfo() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripAllDetailInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripAllDetailInfo.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripAllDetailInfo.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripAllDetailInfo.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-route-plan-service/src/main/java/plan/entity/TripAllDetailInfo.java",
                    "name": "TripAllDetailInfo",
                    "code": "@Data\npublic class TripAllDetailInfo {\n\n    private String tripId;\n\n    private Date travelDate;\n\n    private String from;\n\n    private String to;\n\n    public TripAllDetailInfo() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripAllDetailInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripAllDetailInfo.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripAllDetailInfo.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripAllDetailInfo.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/TripAllDetailInfo.java",
                    "name": "TripAllDetailInfo",
                    "code": "@Data\n@ToString\npublic class TripAllDetailInfo {\n\n    private String tripId;\n\n    private Date travelDate;\n\n    private String from;\n\n    private String to;\n\n    public TripAllDetailInfo() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripAllDetailInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripAllDetailInfo.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripAllDetailInfo.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripAllDetailInfo.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/TripAllDetailInfo.java",
                    "name": "TripAllDetailInfo",
                    "code": "@Data\npublic class TripAllDetailInfo {\n\n    private String tripId;\n\n    private Date travelDate;\n\n    private String from;\n\n    private String to;\n\n    public TripAllDetailInfo() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripAllDetailInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripAllDetailInfo.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripAllDetailInfo.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripAllDetailInfo.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "tripId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "travelDate",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "from",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "to",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Travel",
            "msEntities": [
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/Travel.java",
                    "name": "Travel",
                    "code": "@Data\npublic class Travel {\n\n    private Trip trip;\n\n    private String startingPlace;\n\n    private String endPlace;\n\n    private Date departureTime;\n\n    public Travel(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Travel.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Travel.java",
                            "code": "private String startingPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Travel.java",
                            "code": "private String endPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "departureTime",
                            "type": "Date",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Travel.java",
                            "code": "private Date departureTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Travel.java",
                    "name": "Travel",
                    "code": "@Data\n@AllArgsConstructor\npublic class Travel {\n\n    private Trip trip;\n    private String startingPlace;\n    private String endPlace;\n    private Date departureTime;\n\n    public Travel(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Travel.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Travel.java",
                            "code": "private String startingPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Travel.java",
                            "code": "private String endPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "departureTime",
                            "type": "Date",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Travel.java",
                            "code": "private Date departureTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Travel.java",
                    "name": "Travel",
                    "code": "@Data\npublic class Travel {\n\n    private Trip trip;\n\n    private String startingPlace;\n\n    private String endPlace;\n\n    private Date departureTime;\n\n    public Travel(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Travel.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Travel.java",
                            "code": "private String startingPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Travel.java",
                            "code": "private String endPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "departureTime",
                            "type": "Date",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Travel.java",
                            "code": "private Date departureTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Travel.java",
                    "name": "Travel",
                    "code": "@Data\npublic class Travel {\n\n    private Trip trip;\n\n    private String startingPlace;\n\n    private String endPlace;\n\n    private Date departureTime;\n\n    public Travel(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Travel.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Travel.java",
                            "code": "private String startingPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Travel.java",
                            "code": "private String endPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "departureTime",
                            "type": "Date",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Travel.java",
                            "code": "private Date departureTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/Travel.java",
                    "name": "Travel",
                    "code": "@Data\npublic class Travel {\n\n    private Trip trip;\n\n    private String startingPlace;\n\n    private String endPlace;\n\n    private Date departureTime;\n\n    public Travel(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Travel.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Travel.java",
                            "code": "private String startingPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Travel.java",
                            "code": "private String endPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "departureTime",
                            "type": "Date",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Travel.java",
                            "code": "private Date departureTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/Travel.java",
                    "name": "Travel",
                    "code": "@Data\npublic class Travel {\n\n    private Trip trip;\n\n    private String startingPlace;\n\n    private String endPlace;\n\n    private Date departureTime;\n\n    public Travel(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Travel.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Travel.java",
                            "code": "private String startingPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Travel.java",
                            "code": "private String endPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "departureTime",
                            "type": "Date",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Travel.java",
                            "code": "private Date departureTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "trip",
                    "type": "Trip",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "startingPlace",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "endPlace",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "departureTime",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "TripId",
            "msEntities": [
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/TripId.java",
                    "name": "TripId",
                    "code": "@Data\npublic class TripId implements Serializable{\n    private Type type;\n    private String number;\n\n\n    public TripId(){}\n\n    public TripId(String trainNumber){\n        char type0 \u003d trainNumber.charAt(0);\n        switch(type0){\n            case \u0027G\u0027: this.type \u003d Type.G;\n                break;\n            case \u0027D\u0027: this.type \u003d Type.D;\n                break;\n            case \u0027Z\u0027: this.type \u003d Type.Z;\n                break;\n            case \u0027T\u0027: this.type \u003d Type.T;\n                break;\n            case \u0027K\u0027: this.type \u003d Type.K;\n                break;\n            default:break;\n        }\n\n        this.number \u003d trainNumber.substring(1);\n    }\n\n    @Override\n    public String toString(){\n        return type.getName() + number;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "type",
                            "type": "Type",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripId.java",
                            "code": "private Type type;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "number",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TripId.java",
                            "code": "private String number;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "type",
                            "type": "TrainTypeEnum",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-rebook-service/src/main/java/rebook/entity/TripId.java",
                    "name": "TripId",
                    "code": "@Data\npublic class TripId implements Serializable{\n    private Type type;\n    private String number;\n\n\n    public TripId(){\n        //Default Constructor\n    }\n\n    public TripId(String trainNumber){\n        char type0 \u003d trainNumber.charAt(0);\n        switch(type0){\n            case \u0027G\u0027: this.type \u003d Type.G;\n                break;\n            case \u0027D\u0027: this.type \u003d Type.D;\n                break;\n            case \u0027Z\u0027: this.type \u003d Type.Z;\n                break;\n            case \u0027T\u0027: this.type \u003d Type.T;\n                break;\n            case \u0027K\u0027: this.type \u003d Type.K;\n                break;\n            default:break;\n        }\n\n        this.number \u003d trainNumber.substring(1);\n    }\n\n    @Override\n    public String toString(){\n        return type.getName() + number;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "type",
                            "type": "Type",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripId.java",
                            "code": "private Type type;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "number",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/TripId.java",
                            "code": "private String number;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "type",
                            "type": "TrainTypeEnum",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/TripId.java",
                    "name": "TripId",
                    "code": "@Data\npublic class TripId implements Serializable{\n    private Type type;\n    private String number;\n\n    public TripId(){}\n\n    public TripId(String trainNumber){\n        char type0 \u003d trainNumber.charAt(0);\n        switch(type0){\n            case \u0027G\u0027: this.type \u003d Type.G;\n                break;\n            case \u0027D\u0027: this.type \u003d Type.D;\n                break;\n            case \u0027Z\u0027: this.type \u003d Type.Z;\n                break;\n            case \u0027T\u0027: this.type \u003d Type.T;\n                break;\n            case \u0027K\u0027: this.type \u003d Type.K;\n                break;\n            default:break;\n        }\n\n        this.number \u003d trainNumber.substring(1);\n    }\n\n    @Override\n    public String toString(){\n        return type.getName() + number;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "type",
                            "type": "Type",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/TripId.java",
                            "code": "private Type type;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "number",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/TripId.java",
                            "code": "private String number;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "type",
                            "type": "TrainTypeEnum",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripId.java",
                    "name": "TripId",
                    "code": "@Data\npublic class TripId implements Serializable{\n    private Type type;\n    private String number;\n\n\n    public TripId(){}\n\n    public TripId(String trainNumber){\n        char type0 \u003d trainNumber.charAt(0);\n        switch(type0){\n            case \u0027G\u0027: this.type \u003d Type.G;\n                break;\n            case \u0027D\u0027: this.type \u003d Type.D;\n                break;\n            case \u0027Z\u0027: this.type \u003d Type.Z;\n                break;\n            case \u0027T\u0027: this.type \u003d Type.T;\n                break;\n            case \u0027K\u0027: this.type \u003d Type.K;\n                break;\n            default:break;\n        }\n\n        this.number \u003d trainNumber.substring(1);\n    }\n\n    @Override\n    public String toString(){\n        return type.getName() + number;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "type",
                            "type": "Type",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripId.java",
                            "code": "private Type type;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "number",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TripId.java",
                            "code": "private String number;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "type",
                            "type": "TrainTypeEnum",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-route-plan-service/src/main/java/plan/entity/TripId.java",
                    "name": "TripId",
                    "code": "@Data\npublic class TripId implements Serializable{\n    private Type type;\n    private String number;\n\n\n    public TripId(){\n        //Default Constructor\n    }\n\n    public TripId(String trainNumber){\n        char type0 \u003d trainNumber.charAt(0);\n        switch(type0){\n            case \u0027Z\u0027: this.type \u003d Type.Z;\n                break;\n            case \u0027T\u0027: this.type \u003d Type.T;\n                break;\n            case \u0027K\u0027: this.type \u003d Type.K;\n                break;\n            default:break;\n        }\n\n        this.number \u003d trainNumber.substring(1);\n    }\n\n    @Override\n    public String toString(){\n        return type.getName() + number;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "type",
                            "type": "Type",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripId.java",
                            "code": "private Type type;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "number",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripId.java",
                            "code": "private String number;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "type",
                            "type": "TrainTypeEnum",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TripId.java",
                    "name": "TripId",
                    "code": "@Data\npublic class TripId implements Serializable{\n    private Type type;\n    private String number;\n\n\n    public TripId(){\n        //Default Constructor\n    }\n\n    public TripId(String trainNumber){\n        char type0 \u003d trainNumber.charAt(0);\n        switch(type0){\n            case \u0027G\u0027: this.type \u003d Type.G;\n                break;\n            case \u0027D\u0027: this.type \u003d Type.D;\n                break;\n            case \u0027Z\u0027: this.type \u003d Type.Z;\n                break;\n            case \u0027T\u0027: this.type \u003d Type.T;\n                break;\n            case \u0027K\u0027: this.type \u003d Type.K;\n                break;\n            default:break;\n        }\n\n        this.number \u003d trainNumber.substring(1);\n    }\n\n    @Override\n    public String toString(){\n        return type.getName() + number;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "type",
                            "type": "Type",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TripId.java",
                            "code": "private Type type;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "number",
                            "type": "String",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TripId.java",
                            "code": "private String number;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "type",
                            "type": "TrainTypeEnum",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripId.java",
                    "name": "TripId",
                    "code": "@Data\npublic class TripId implements Serializable{\n\n    private TrainTypeEnum type;\n\n    private String number;\n\n    public TripId(){\n        //Default Constructor\n    }\n\n    public TripId(String trainNumber){\n        char type0 \u003d trainNumber.charAt(0);\n        switch(type0){\n            case \u0027G\u0027: this.type \u003d TrainTypeEnum.G;\n                break;\n            case \u0027D\u0027: this.type \u003d TrainTypeEnum.D;\n                break;\n            case \u0027Z\u0027: this.type \u003d TrainTypeEnum.Z;\n                break;\n            case \u0027T\u0027: this.type \u003d TrainTypeEnum.T;\n                break;\n            case \u0027K\u0027: this.type \u003d TrainTypeEnum.K;\n                break;\n            default:break;\n        }\n\n        this.number \u003d trainNumber.substring(1);\n    }\n\n    @Override\n    public String toString(){\n        return type.getName() + number;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "type",
                            "type": "TrainTypeEnum",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripId.java",
                            "code": "private TrainTypeEnum type;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "number",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripId.java",
                            "code": "private String number;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "type",
                            "type": "Type",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/TripId.java",
                    "name": "TripId",
                    "code": "@Data\npublic class TripId implements Serializable{\n    private Type type;\n    private String number;\n\n\n    public TripId(){\n        //Default Constructor\n    }\n\n    public TripId(String trainNumber){\n        char type0 \u003d trainNumber.charAt(0);\n        switch(type0){\n            case \u0027Z\u0027: this.type \u003d Type.Z;\n                break;\n            case \u0027T\u0027: this.type \u003d Type.T;\n                break;\n            case \u0027K\u0027: this.type \u003d Type.K;\n                break;\n            default:break;\n        }\n\n        this.number \u003d trainNumber.substring(1);\n    }\n\n    @Override\n    public String toString(){\n        return type.getName() + number;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "type",
                            "type": "Type",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripId.java",
                            "code": "private Type type;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "number",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripId.java",
                            "code": "private String number;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "type",
                            "type": "TrainTypeEnum",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/TripId.java",
                    "name": "TripId",
                    "code": "@Data\npublic class TripId implements Serializable {\n    private Type type;\n    private String number;\n\n    public TripId(Type type, String number) {\n        this.type \u003d type;\n        this.number \u003d number;\n    }\n\n    public TripId() {\n        //Default Constructor\n    }\n\n    public TripId(String trainNumber) {\n        char type0 \u003d trainNumber.charAt(0);\n        switch (type0) {\n            case \u0027G\u0027:\n                this.type \u003d Type.G;\n                break;\n            case \u0027D\u0027:\n                this.type \u003d Type.D;\n                break;\n            default:\n                break;\n        }\n\n        this.number \u003d trainNumber.substring(1);\n    }\n\n    @Override\n    public String toString() {\n        return type.getName() + number;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "type",
                            "type": "Type",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripId.java",
                            "code": "private Type type;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "number",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripId.java",
                            "code": "private String number;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "type",
                            "type": "TrainTypeEnum",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TripId.java",
                    "name": "TripId",
                    "code": "@Data\npublic class TripId implements Serializable{\n    private Type type;\n    private String number;\n\n    public TripId(){\n        //Default Constructor\n    }\n\n    public TripId(String trainNumber){\n        char type0 \u003d trainNumber.charAt(0);\n        switch(type0){\n            case \u0027G\u0027: this.type \u003d Type.G;\n                break;\n            case \u0027D\u0027: this.type \u003d Type.D;\n                break;\n            case \u0027Z\u0027: this.type \u003d Type.Z;\n                break;\n            case \u0027T\u0027: this.type \u003d Type.T;\n                break;\n            case \u0027K\u0027: this.type \u003d Type.K;\n                break;\n            default:break;\n        }\n\n        this.number \u003d trainNumber.substring(1);\n    }\n\n    @Override\n    public String toString(){\n        return type.getName() + number;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "type",
                            "type": "Type",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TripId.java",
                            "code": "private Type type;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "number",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TripId.java",
                            "code": "private String number;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "type",
                            "type": "TrainTypeEnum",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                }
            ],
            "uniqueFields": [
                {
                    "name": "type",
                    "type": "Type",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "number",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "type",
                    "type": "TrainTypeEnum",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "OrderTicketsResult",
            "msEntities": [
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsResult.java",
                    "name": "OrderTicketsResult",
                    "code": "@Data\npublic class OrderTicketsResult {\n\n    private boolean status;\n\n    private String message;\n\n    private Order order;\n\n    public OrderTicketsResult(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsResult.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "message",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsResult.java",
                            "code": "private String message;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "order",
                            "type": "Order",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/OrderTicketsResult.java",
                            "code": "private Order order;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "status",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "message",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "order",
                    "type": "Order",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "TravelResult",
            "msEntities": [
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/TravelResult.java",
                    "name": "TravelResult",
                    "code": "@Data\npublic class TravelResult {\n\n    private boolean status;\n\n    private double percent;\n\n    private TrainType trainType;\n\n    private Map\u003cString,String\u003e prices;\n\n    public TravelResult(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TravelResult.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "percent",
                            "type": "DOUBLE",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TravelResult.java",
                            "code": "private double percent;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainType",
                            "type": "TrainType",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TravelResult.java",
                            "code": "private TrainType trainType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "prices",
                            "type": "Map",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/TravelResult.java",
                            "code": "private Map\u003cString,String\u003e prices;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "message",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/TravelResult.java",
                    "name": "TravelResult",
                    "code": "@Data\npublic class TravelResult {\n    private boolean status;\n    private double percent;\n    private TrainType trainType;\n\n    private Map\u003cString,String\u003e prices;\n\n    public TravelResult(){\n        //Default Constructor\n    }\n\n    public boolean isStatus() {\n        return status;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/TravelResult.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "percent",
                            "type": "DOUBLE",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/TravelResult.java",
                            "code": "private double percent;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainType",
                            "type": "TrainType",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/TravelResult.java",
                            "code": "private TrainType trainType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "prices",
                            "type": "Map",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/TravelResult.java",
                            "code": "private Map\u003cString,String\u003e prices;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "message",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TravelResult.java",
                    "name": "TravelResult",
                    "code": "@Data\npublic class TravelResult {\n\n    private boolean status;\n\n    private double percent;\n\n    private TrainType trainType;\n\n    private Map\u003cString,String\u003e prices;\n\n    public TravelResult(){\n        //Default Constructor\n    }\n\n    public boolean isStatus() {\n        return status;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TravelResult.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "percent",
                            "type": "DOUBLE",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TravelResult.java",
                            "code": "private double percent;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainType",
                            "type": "TrainType",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TravelResult.java",
                            "code": "private TrainType trainType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "prices",
                            "type": "Map",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/TravelResult.java",
                            "code": "private Map\u003cString,String\u003e prices;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "message",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TravelResult.java",
                    "name": "TravelResult",
                    "code": "@Data\npublic class TravelResult {\n\n    private boolean status;\n\n    private double percent;\n\n    private TrainType trainType;\n\n    private Map\u003cString,String\u003e prices;\n\n    private String message;\n\n    public TravelResult(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TravelResult.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "percent",
                            "type": "DOUBLE",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TravelResult.java",
                            "code": "private double percent;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainType",
                            "type": "TrainType",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TravelResult.java",
                            "code": "private TrainType trainType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "prices",
                            "type": "Map",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TravelResult.java",
                            "code": "private Map\u003cString,String\u003e prices;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "message",
                            "type": "String",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/TravelResult.java",
                            "code": "private String message;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelResult.java",
                    "name": "TravelResult",
                    "code": "@Data\npublic class TravelResult {\n\n    private boolean status;\n\n    private double percent;\n\n    private TrainType trainType;\n\n    private Map\u003cString,String\u003e prices;\n\n    public TravelResult(){\n        //Default Constructor\n    }\n\n    public boolean isStatus() {\n        return status;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelResult.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "percent",
                            "type": "DOUBLE",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelResult.java",
                            "code": "private double percent;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainType",
                            "type": "TrainType",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelResult.java",
                            "code": "private TrainType trainType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "prices",
                            "type": "Map",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelResult.java",
                            "code": "private Map\u003cString,String\u003e prices;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "message",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/TravelResult.java",
                    "name": "TravelResult",
                    "code": "@Data\npublic class TravelResult {\n\n    private boolean status;\n\n    private double percent;\n\n    private TrainType trainType;\n\n    private Map\u003cString,String\u003e prices;\n\n    private String message;\n\n    public TravelResult() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TravelResult.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "percent",
                            "type": "DOUBLE",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TravelResult.java",
                            "code": "private double percent;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainType",
                            "type": "TrainType",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TravelResult.java",
                            "code": "private TrainType trainType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "prices",
                            "type": "Map",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TravelResult.java",
                            "code": "private Map\u003cString,String\u003e prices;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "message",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TravelResult.java",
                            "code": "private String message;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "status",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "percent",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "trainType",
                    "type": "TrainType",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "prices",
                    "type": "Map",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "message",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Trip",
            "msEntities": [
                {
                    "path": "/ts-preserve-service/src/main/java/preserve/entity/Trip.java",
                    "name": "Trip",
                    "code": "@Data\npublic class Trip {\n    @Valid\n    private TripId tripId;\n\n    @Valid\n    @NotNull\n    private String trainTypeId;\n\n    private String routeId;\n\n\n    @Valid\n    @NotNull\n    private String startingStationId;\n\n\n    @Valid\n    private String stationsId;\n\n    @Valid\n    @NotNull\n    private String terminalStationId;\n\n    @Valid\n    @NotNull\n    private Date startingTime;\n\n    @Valid\n    @NotNull\n    private Date endTime;\n\n    public Trip(TripId tripId, String trainTypeId, String startingStationId, String stationsId, String terminalStationId, Date startingTime, Date endTime) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.startingStationId \u003d startingStationId;\n        this.stationsId \u003d stationsId;\n        this.terminalStationId \u003d terminalStationId;\n        this.startingTime \u003d startingTime;\n        this.endTime \u003d endTime;\n    }\n\n    public Trip(TripId tripId, String trainTypeId, String routeId) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.routeId \u003d routeId;\n        this.startingStationId \u003d \"\";\n        this.terminalStationId \u003d \"\";\n        this.startingTime \u003d new Date();\n        this.endTime \u003d new Date();\n    }\n\n    public Trip(){\n        //Default Constructor\n        this.trainTypeId \u003d \"\";\n        this.startingStationId \u003d \"\";\n        this.terminalStationId \u003d \"\";\n        this.startingTime \u003d new Date();\n        this.endTime \u003d new Date();\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Trip.java",
                            "code": "@Valid\n    private TripId tripId;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String trainTypeId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Trip.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStationId",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String startingStationId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationsId",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Trip.java",
                            "code": "@Valid\n    private String stationsId;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String terminalStationId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private Date startingTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-preserve-service/src/main/java/preserve/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private Date endTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-rebook-service/src/main/java/rebook/entity/Trip.java",
                    "name": "Trip",
                    "code": "@Data\npublic class Trip {\n\n    private TripId tripId;\n\n    private String trainTypeId;\n\n    private String routeId;\n\n    private String startingStationId;\n\n\n    private String stationsId;\n\n    private String terminalStationId;\n\n    private Date startingTime;\n\n    private Date endTime;\n\n    public Trip(TripId tripId, String trainTypeId, String startingStationId, String stationsId, String terminalStationId, Date startingTime, Date endTime) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.startingStationId \u003d startingStationId;\n        this.stationsId \u003d stationsId;\n        this.terminalStationId \u003d terminalStationId;\n        this.startingTime \u003d startingTime;\n        this.endTime \u003d endTime;\n    }\n\n    public Trip(TripId tripId, String trainTypeId, String routeId) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.routeId \u003d routeId;\n    }\n\n    public Trip(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Trip.java",
                            "code": "private TripId tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Trip.java",
                            "code": "private String trainTypeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Trip.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStationId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Trip.java",
                            "code": "private String startingStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationsId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Trip.java",
                            "code": "private String stationsId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Trip.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Trip.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/Trip.java",
                            "code": "private Date endTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Trip.java",
                    "name": "Trip",
                    "code": "@Data\n@AllArgsConstructor\npublic class Trip {\n    @Valid\n    private TripId tripId;\n\n    @Valid\n    @NotNull\n    private String trainTypeId;\n\n    private String routeId;\n\n    @Valid\n    @NotNull\n    private String startingStationId;\n\n    @Valid\n    private String stationsId;\n\n    @Valid\n    @NotNull\n    private String terminalStationId;\n\n    @Valid\n    @NotNull\n    private Date startingTime;\n\n    @Valid\n    @NotNull\n    private Date endTime;\n\n    public Trip(TripId tripId, String trainTypeId, String startingStationId, String stationsId, String terminalStationId, Date startingTime, Date endTime) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.startingStationId \u003d startingStationId;\n        this.stationsId \u003d stationsId;\n        this.terminalStationId \u003d terminalStationId;\n        this.startingTime \u003d startingTime;\n        this.endTime \u003d endTime;\n    }\n\n    public Trip(TripId tripId, String trainTypeId, String routeId) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.routeId \u003d routeId;\n        this.startingStationId \u003d \"\";\n        this.terminalStationId \u003d \"\";\n        this.startingTime \u003d new Date();\n        this.endTime \u003d new Date();\n    }\n\n    public Trip(){\n        //Default Constructor\n        this.startingStationId \u003d \"\";\n        this.trainTypeId \u003d \"\";\n        this.terminalStationId \u003d \"\";\n        this.startingTime \u003d new Date();\n        this.endTime \u003d new Date();\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Trip.java",
                            "code": "@Valid\n    private TripId tripId;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String trainTypeId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Trip.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStationId",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String startingStationId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationsId",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Trip.java",
                            "code": "@Valid\n    private String stationsId;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String terminalStationId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private Date startingTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-basic-service/src/main/java/fdse/microservice/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private Date endTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Trip.java",
                    "name": "Trip",
                    "code": "@Data\npublic class Trip {\n    @Valid\n    private TripId tripId;\n\n    @Valid\n    @NotNull\n    private String trainTypeId;\n\n    private String routeId;\n\n\n    @Valid\n    @NotNull\n    private String startingStationId;\n\n    @Valid\n    private String stationsId;\n\n    @Valid\n    @NotNull\n    private String terminalStationId;\n\n    @Valid\n    @NotNull\n    private Date startingTime;\n\n    @Valid\n    @NotNull\n    private Date endTime;\n\n    public Trip(TripId tripId, String trainTypeId, String startingStationId, String stationsId, String terminalStationId, Date startingTime, Date endTime) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.startingStationId \u003d startingStationId;\n        this.stationsId \u003d stationsId;\n        this.terminalStationId \u003d terminalStationId;\n        this.startingTime \u003d startingTime;\n        this.endTime \u003d endTime;\n    }\n\n    public Trip(TripId tripId, String trainTypeId, String routeId) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.routeId \u003d routeId;\n        this.startingStationId \u003d \"\";\n        this.terminalStationId \u003d \"\";\n        this.startingTime \u003d new Date();\n        this.endTime \u003d new Date();\n    }\n\n    public Trip(){\n        //Default Constructor\n        this.trainTypeId \u003d \"\";\n        this.startingStationId \u003d \"\";\n        this.terminalStationId \u003d \"\";\n        this.startingTime \u003d new Date();\n        this.endTime \u003d new Date();\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Trip.java",
                            "code": "@Valid\n    private TripId tripId;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String trainTypeId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Trip.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStationId",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String startingStationId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationsId",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Trip.java",
                            "code": "@Valid\n    private String stationsId;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String terminalStationId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private Date startingTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-preserve-other-service/src/main/java/preserveOther/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private Date endTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-route-plan-service/src/main/java/plan/entity/Trip.java",
                    "name": "Trip",
                    "code": "@Data\npublic class Trip {\n\n    private TripId tripId;\n\n    private String trainTypeId;\n\n    private String routeId;\n\n    private String startingStationId;\n\n    private String stationsId;\n\n    private String terminalStationId;\n\n    private Date startingTime;\n\n    private Date endTime;\n\n    public Trip(TripId tripId, String trainTypeId, String startingStationId, String stationsId, String terminalStationId, Date startingTime, Date endTime) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.startingStationId \u003d startingStationId;\n        this.stationsId \u003d stationsId;\n        this.terminalStationId \u003d terminalStationId;\n        this.startingTime \u003d startingTime;\n        this.endTime \u003d endTime;\n    }\n\n    public Trip(TripId tripId, String trainTypeId, String routeId) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.routeId \u003d routeId;\n    }\n\n    public Trip(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/Trip.java",
                            "code": "private TripId tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/Trip.java",
                            "code": "private String trainTypeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/Trip.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStationId",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/Trip.java",
                            "code": "private String startingStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationsId",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/Trip.java",
                            "code": "private String stationsId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/Trip.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/Trip.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/Trip.java",
                            "code": "private Date endTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Trip.java",
                    "name": "Trip",
                    "code": "@Data\npublic class Trip {\n    @Valid\n    private TripId tripId;\n\n    @Valid\n    @NotNull\n    private String trainTypeId;\n\n    private String routeId;\n\n    //-------------------------------The following variables are temporarily disabled-----------------------\n    @Valid\n    @NotNull\n    private String startingStationId;\n\n    //Intermediate stops. In the initial version, there was only one stop, that is, only one stop and one terminal. In the later version, the stops were expanded to several stops.\n    @Valid\n    private String stationsId;\n\n    @Valid\n    @NotNull\n    private String terminalStationId;\n\n    @Valid\n    @NotNull\n    private Date startingTime;\n\n    @Valid\n    @NotNull\n    private Date endTime;\n\n    public Trip(TripId tripId, String trainTypeId, String startingStationId, String stationsId, String terminalStationId, Date startingTime, Date endTime) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.startingStationId \u003d startingStationId;\n        this.stationsId \u003d stationsId;\n        this.terminalStationId \u003d terminalStationId;\n        this.startingTime \u003d startingTime;\n        this.endTime \u003d endTime;\n    }\n\n    public Trip(TripId tripId, String trainTypeId, String routeId) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.routeId \u003d routeId;\n        this.startingStationId \u003d \"\";\n        this.terminalStationId \u003d \"\";\n        this.startingTime \u003d new Date();\n        this.endTime \u003d new Date();\n    }\n\n    public Trip(){\n        //Default Constructor\n        this.trainTypeId \u003d \"\";\n        this.startingStationId \u003d \"\";\n        this.terminalStationId \u003d \"\";\n        this.startingTime \u003d new Date();\n        this.endTime \u003d new Date();\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Trip.java",
                            "code": "@Valid\n    private TripId tripId;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String trainTypeId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Trip.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStationId",
                            "type": "String",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String startingStationId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationsId",
                            "type": "String",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Trip.java",
                            "code": "@Valid\n    private String stationsId;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String terminalStationId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private Date startingTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-ticketinfo-service/src/main/java/ticketinfo/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private Date endTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Trip.java",
                    "name": "Trip",
                    "code": "@Data\npublic class Trip {\n\n    private TripId tripId;\n\n    private String trainTypeId;\n\n    private String routeId;\n\n    private String startingStationId;\n\n    private String stationsId;\n\n    private String terminalStationId;\n\n    private Date startingTime;\n\n    private Date endTime;\n\n    public Trip(TripId tripId, String trainTypeId, String startingStationId, String stationsId, String terminalStationId, Date startingTime, Date endTime) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.startingStationId \u003d startingStationId;\n        this.stationsId \u003d stationsId;\n        this.terminalStationId \u003d terminalStationId;\n        this.startingTime \u003d startingTime;\n        this.endTime \u003d endTime;\n    }\n\n    public Trip(TripId tripId, String trainTypeId, String routeId) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.routeId \u003d routeId;\n    }\n\n    public Trip(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Trip.java",
                            "code": "private TripId tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Trip.java",
                            "code": "private String trainTypeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Trip.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStationId",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Trip.java",
                            "code": "private String startingStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationsId",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Trip.java",
                            "code": "private String stationsId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Trip.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Trip.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/Trip.java",
                            "code": "private Date endTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/Trip.java",
                    "name": "Trip",
                    "code": "@Data\n@Document(collection\u003d\"trip\")\npublic class Trip {\n    @Valid\n    @Id\n    private TripId tripId;\n\n    @Valid\n    @NotNull\n    private String trainTypeId;\n\n    private String routeId;\n\n\n    @Valid\n    @NotNull\n    private String startingStationId;\n\n    @Valid\n    private String stationsId;\n\n    @Valid\n    @NotNull\n    private String terminalStationId;\n\n    @Valid\n    @NotNull\n    private Date startingTime;\n\n    @Valid\n    @NotNull\n    private Date endTime;\n\n    public Trip(TripId tripId, String trainTypeId, String startingStationId, String stationsId, String terminalStationId, Date startingTime, Date endTime) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.startingStationId \u003d startingStationId;\n        this.stationsId \u003d stationsId;\n        this.terminalStationId \u003d terminalStationId;\n        this.startingTime \u003d startingTime;\n        this.endTime \u003d endTime;\n    }\n\n    public Trip(TripId tripId, String trainTypeId, String routeId) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.routeId \u003d routeId;\n        this.startingStationId \u003d \"\";\n        this.terminalStationId \u003d \"\";\n        this.startingTime \u003d new Date();\n        this.endTime \u003d new Date();\n    }\n\n    public Trip(){\n        //Default Constructor\n        this.trainTypeId \u003d \"\";\n        this.startingStationId \u003d \"\";\n        this.terminalStationId \u003d \"\";\n        this.startingTime \u003d new Date();\n        this.endTime \u003d new Date();\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"trip\"",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Trip.java",
                            "code": "@Valid\n    @Id\n    private TripId tripId;",
                            "annotations": [
                                "@Valid",
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String trainTypeId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Trip.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStationId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String startingStationId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationsId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Trip.java",
                            "code": "@Valid\n    private String stationsId;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String terminalStationId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private Date startingTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private Date endTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/Trip.java",
                    "name": "Trip",
                    "code": "@Data\n@Document(collection\u003d\"trip\")\npublic class Trip {\n    @Valid\n    @Id\n    private TripId tripId;\n\n    @Valid\n    @NotNull\n    private String trainTypeId;\n\n    private String routeId;\n\n    private Date startingTime;\n\n    @Valid\n    @NotNull\n    private String startingStationId;\n\n    @Valid\n    private String stationsId;\n\n    @Valid\n    @NotNull\n    private String terminalStationId;\n\n    @Valid\n    @NotNull\n    private Date endTime;\n\n    public Trip(TripId tripId, String trainTypeId, String startingStationId, String stationsId, String terminalStationId, Date startingTime, Date endTime) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.startingStationId \u003d startingStationId;\n        this.stationsId \u003d stationsId;\n        this.terminalStationId \u003d terminalStationId;\n        this.startingTime \u003d startingTime;\n        this.endTime \u003d endTime;\n    }\n\n    public Trip(TripId tripId, String trainTypeId, String routeId) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.routeId \u003d routeId;\n        this.startingStationId \u003d \"\";\n        this.terminalStationId \u003d \"\";\n        this.endTime \u003d new Date();\n    }\n\n    public Trip(){\n        //Default Constructor\n        this.trainTypeId \u003d \"\";\n        this.startingStationId \u003d \"\";\n        this.terminalStationId \u003d \"\";\n        this.endTime \u003d new Date();\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"trip\"",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Trip.java",
                            "code": "@Valid\n    @Id\n    private TripId tripId;",
                            "annotations": [
                                "@Valid",
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String trainTypeId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Trip.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Trip.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": [
                                "@Valid",
                                "@NotNull"
                            ]
                        },
                        {
                            "name": "startingStationId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String startingStationId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationsId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Trip.java",
                            "code": "@Valid\n    private String stationsId;",
                            "annotations": [
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private String terminalStationId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-travel-service/src/main/java/travel/entity/Trip.java",
                            "code": "@Valid\n    @NotNull\n    private Date endTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": true,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Trip.java",
                    "name": "Trip",
                    "code": "@Data\npublic class Trip {\n\n    private TripId tripId;\n\n    private String trainTypeId;\n\n    private String routeId;\n\n    private String startingStationId;\n\n    private String stationsId;\n\n    private String terminalStationId;\n\n    private Date startingTime;\n\n    private Date endTime;\n\n    public Trip(TripId tripId, String trainTypeId, String startingStationId, String stationsId, String terminalStationId, Date startingTime, Date endTime) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.startingStationId \u003d startingStationId;\n        this.stationsId \u003d stationsId;\n        this.terminalStationId \u003d terminalStationId;\n        this.startingTime \u003d startingTime;\n        this.endTime \u003d endTime;\n    }\n\n    public Trip(TripId tripId, String trainTypeId, String routeId) {\n        this.tripId \u003d tripId;\n        this.trainTypeId \u003d trainTypeId;\n        this.routeId \u003d routeId;\n    }\n\n    public Trip(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "TripId",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Trip.java",
                            "code": "private TripId tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Trip.java",
                            "code": "private String trainTypeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Trip.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStationId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Trip.java",
                            "code": "private String startingStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationsId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Trip.java",
                            "code": "private String stationsId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Trip.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Trip.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/Trip.java",
                            "code": "private Date endTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "tripId",
                    "type": "TripId",
                    "annotationsHashSet": [
                        "@Valid",
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "trainTypeId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "routeId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "startingStationId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "stationsId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid"
                    ],
                    "annotationList": []
                },
                {
                    "name": "terminalStationId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "startingTime",
                    "type": "Date",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "endTime",
                    "type": "Date",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": true
        },
        {
            "name": "SecurityConfig",
            "msEntities": [
                {
                    "path": "/ts-security-service/src/main/java/security/entity/SecurityConfig.java",
                    "name": "SecurityConfig",
                    "code": "@Data\n@Document(collection \u003d \"security_config\")\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class SecurityConfig {\n\n    private UUID id;\n\n    private String name;\n\n    private String value;\n\n    private String description;\n\n    public SecurityConfig() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"security_config\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-security-service/src/main/java/security/entity/SecurityConfig.java",
                            "code": "private UUID id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-security-service/src/main/java/security/entity/SecurityConfig.java",
                            "code": "private String name;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "value",
                            "type": "String",
                            "path": "/ts-security-service/src/main/java/security/entity/SecurityConfig.java",
                            "code": "private String value;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "description",
                            "type": "String",
                            "path": "/ts-security-service/src/main/java/security/entity/SecurityConfig.java",
                            "code": "private String description;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "name",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "value",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "description",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "InsertConsignRecordResult",
            "msEntities": [
                {
                    "path": "/ts-consign-service/src/main/java/consign/entity/InsertConsignRecordResult.java",
                    "name": "InsertConsignRecordResult",
                    "code": "@Data\npublic class InsertConsignRecordResult {\n    private boolean status;\n\n    private String message;\n\n    public InsertConsignRecordResult(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "status",
                            "type": "BOOLEAN",
                            "path": "/ts-consign-service/src/main/java/consign/entity/InsertConsignRecordResult.java",
                            "code": "private boolean status;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "message",
                            "type": "String",
                            "path": "/ts-consign-service/src/main/java/consign/entity/InsertConsignRecordResult.java",
                            "code": "private String message;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "status",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "message",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "GetPriceDomain",
            "msEntities": [
                {
                    "path": "/ts-consign-service/src/main/java/consign/entity/GetPriceDomain.java",
                    "name": "GetPriceDomain",
                    "code": "@Data\npublic class GetPriceDomain {\n    private double weight;\n    private boolean isWithinRegion;\n\n    public GetPriceDomain(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "weight",
                            "type": "DOUBLE",
                            "path": "/ts-consign-service/src/main/java/consign/entity/GetPriceDomain.java",
                            "code": "private double weight;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "isWithinRegion",
                            "type": "BOOLEAN",
                            "path": "/ts-consign-service/src/main/java/consign/entity/GetPriceDomain.java",
                            "code": "private boolean isWithinRegion;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "weight",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "isWithinRegion",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "ConsignRecord",
            "msEntities": [
                {
                    "path": "/ts-consign-service/src/main/java/consign/entity/ConsignRecord.java",
                    "name": "ConsignRecord",
                    "code": "@Data\n@AllArgsConstructor\n@NoArgsConstructor\n@Document(collection \u003d \"consign_record\")\n@JsonIgnoreProperties(ignoreUnknown \u003d true)\npublic class ConsignRecord {\n\n    @Id\n    private UUID id;\n    private UUID orderId;\n    private UUID accountId;\n    private String handleDate;\n    private String targetDate;\n    private String from;\n    private String to;\n    private String consignee;\n    private String phone;\n    private double weight;\n    private double price;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"consign_record\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-consign-service/src/main/java/consign/entity/ConsignRecord.java",
                            "code": "@Id\n    private UUID id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "UUID",
                            "path": "/ts-consign-service/src/main/java/consign/entity/ConsignRecord.java",
                            "code": "private UUID orderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "accountId",
                            "type": "UUID",
                            "path": "/ts-consign-service/src/main/java/consign/entity/ConsignRecord.java",
                            "code": "private UUID accountId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "handleDate",
                            "type": "String",
                            "path": "/ts-consign-service/src/main/java/consign/entity/ConsignRecord.java",
                            "code": "private String handleDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "targetDate",
                            "type": "String",
                            "path": "/ts-consign-service/src/main/java/consign/entity/ConsignRecord.java",
                            "code": "private String targetDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "from",
                            "type": "String",
                            "path": "/ts-consign-service/src/main/java/consign/entity/ConsignRecord.java",
                            "code": "private String from;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "to",
                            "type": "String",
                            "path": "/ts-consign-service/src/main/java/consign/entity/ConsignRecord.java",
                            "code": "private String to;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "consignee",
                            "type": "String",
                            "path": "/ts-consign-service/src/main/java/consign/entity/ConsignRecord.java",
                            "code": "private String consignee;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "phone",
                            "type": "String",
                            "path": "/ts-consign-service/src/main/java/consign/entity/ConsignRecord.java",
                            "code": "private String phone;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "weight",
                            "type": "DOUBLE",
                            "path": "/ts-consign-service/src/main/java/consign/entity/ConsignRecord.java",
                            "code": "private double weight;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "DOUBLE",
                            "path": "/ts-consign-service/src/main/java/consign/entity/ConsignRecord.java",
                            "code": "private double price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "UUID",
                    "annotationsHashSet": [
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "orderId",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "accountId",
                    "type": "UUID",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "handleDate",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "targetDate",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "from",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "to",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "consignee",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "phone",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "weight",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "price",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "OrderInfo",
            "msEntities": [
                {
                    "path": "/ts-order-service/src/main/java/order/entity/OrderInfo.java",
                    "name": "OrderInfo",
                    "code": "@Data\npublic class OrderInfo {\n\n    /**\n     * account id\n     */\n    private String loginId;\n\n    private Date travelDateStart;\n\n    private Date travelDateEnd;\n\n    private Date boughtDateStart;\n\n    private Date boughtDateEnd;\n\n    private int state;\n\n    private boolean enableTravelDateQuery;\n\n    private boolean enableBoughtDateQuery;\n\n    private boolean enableStateQuery;\n\n    public OrderInfo(){\n        //Default Constructor\n    }\n\n    public String getLoginId() {\n        return loginId;\n    }\n\n    public void setLoginId(String loginId) {\n        this.loginId \u003d loginId;\n    }\n\n    public Date getTravelDateStart() {\n        return travelDateStart;\n    }\n\n    public Date getTravelDateEnd() {\n        return travelDateEnd;\n    }\n\n    public Date getBoughtDateStart() {\n        return boughtDateStart;\n    }\n\n    public Date getBoughtDateEnd() {\n        return boughtDateEnd;\n    }\n\n    public int getState() {\n        return state;\n    }\n\n    public void enableTravelDateQuery(Date startTime, Date endTime){\n        enableTravelDateQuery \u003d true;\n        travelDateStart \u003d startTime;\n        travelDateEnd \u003d endTime;\n    }\n\n    public void disableTravelDateQuery(){\n        enableTravelDateQuery \u003d false;\n        travelDateStart \u003d null;\n        travelDateEnd \u003d null;\n    }\n\n    public void enableBoughtDateQuery(Date startTime, Date endTime){\n        enableBoughtDateQuery \u003d true;\n        boughtDateStart \u003d startTime;\n        boughtDateEnd \u003d endTime;\n    }\n\n    public void disableBoughtDateQuery(){\n        enableBoughtDateQuery \u003d false;\n        boughtDateStart \u003d null;\n        boughtDateEnd \u003d null;\n    }\n\n    public void enableStateQuery(int targetStatus){\n        enableStateQuery \u003d true;\n        state \u003d targetStatus;\n    }\n\n    public void disableStateQuery(){\n        enableTravelDateQuery \u003d false;\n        state \u003d -1;\n    }\n\n    public boolean isEnableTravelDateQuery() {\n        return enableTravelDateQuery;\n    }\n\n    public boolean isEnableBoughtDateQuery() {\n        return enableBoughtDateQuery;\n    }\n\n    public boolean isEnableStateQuery() {\n        return enableStateQuery;\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "loginId",
                            "type": "String",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderInfo.java",
                            "code": "private String loginId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDateStart",
                            "type": "Date",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderInfo.java",
                            "code": "private Date travelDateStart;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDateEnd",
                            "type": "Date",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderInfo.java",
                            "code": "private Date travelDateEnd;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDateStart",
                            "type": "Date",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderInfo.java",
                            "code": "private Date boughtDateStart;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "boughtDateEnd",
                            "type": "Date",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderInfo.java",
                            "code": "private Date boughtDateEnd;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "state",
                            "type": "INT",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderInfo.java",
                            "code": "private int state;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "enableTravelDateQuery",
                            "type": "BOOLEAN",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderInfo.java",
                            "code": "private boolean enableTravelDateQuery;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "enableBoughtDateQuery",
                            "type": "BOOLEAN",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderInfo.java",
                            "code": "private boolean enableBoughtDateQuery;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "enableStateQuery",
                            "type": "BOOLEAN",
                            "path": "/ts-order-service/src/main/java/order/entity/OrderInfo.java",
                            "code": "private boolean enableStateQuery;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "loginId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "travelDateStart",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "travelDateEnd",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "boughtDateStart",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "boughtDateEnd",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "state",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "enableTravelDateQuery",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "enableBoughtDateQuery",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "enableStateQuery",
                    "type": "BOOLEAN",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "AllTripFood",
            "msEntities": [
                {
                    "path": "/ts-food-service/src/main/java/foodsearch/entity/AllTripFood.java",
                    "name": "AllTripFood",
                    "code": "@Data\npublic class AllTripFood {\n\n    private List\u003cTrainFood\u003e trainFoodList;\n\n    private Map\u003cString, List\u003cFoodStore\u003e\u003e  foodStoreListMap;\n\n    public AllTripFood(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "trainFoodList",
                            "type": "List",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/AllTripFood.java",
                            "code": "private List\u003cTrainFood\u003e trainFoodList;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "foodStoreListMap",
                            "type": "Map",
                            "path": "/ts-food-service/src/main/java/foodsearch/entity/AllTripFood.java",
                            "code": "private Map\u003cString, List\u003cFoodStore\u003e\u003e  foodStoreListMap;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "trainFoodList",
                    "type": "List",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "foodStoreListMap",
                    "type": "Map",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "RebookInfo",
            "msEntities": [
                {
                    "path": "/ts-rebook-service/src/main/java/rebook/entity/RebookInfo.java",
                    "name": "RebookInfo",
                    "code": "@Data\npublic class RebookInfo {\n\n    @Valid\n    @NotNull\n    private String loginId;\n\n    @Valid\n    @NotNull\n    private String orderId;\n\n    @Valid\n    @NotNull\n    private String oldTripId;\n\n    @Valid\n    @NotNull\n    private String tripId;\n\n    @Valid\n    @NotNull\n    private int seatType;\n\n    @Valid\n    @NotNull\n    private Date date;\n\n    public RebookInfo(){\n        //Default Constructor\n        this.loginId \u003d \"\";\n        this.orderId \u003d \"\";\n        this.oldTripId \u003d \"\";\n        this.tripId \u003d \"\";\n        this.seatType \u003d 0;\n        this.date \u003d new Date();\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "loginId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/RebookInfo.java",
                            "code": "@Valid\n    @NotNull\n    private String loginId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/RebookInfo.java",
                            "code": "@Valid\n    @NotNull\n    private String orderId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "oldTripId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/RebookInfo.java",
                            "code": "@Valid\n    @NotNull\n    private String oldTripId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/RebookInfo.java",
                            "code": "@Valid\n    @NotNull\n    private String tripId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "seatType",
                            "type": "INT",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/RebookInfo.java",
                            "code": "@Valid\n    @NotNull\n    private int seatType;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "date",
                            "type": "Date",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/RebookInfo.java",
                            "code": "@Valid\n    @NotNull\n    private Date date;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "loginId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "orderId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "oldTripId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "tripId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "seatType",
                    "type": "INT",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "date",
                    "type": "Date",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "PaymentDifferenceInfo",
            "msEntities": [
                {
                    "path": "/ts-rebook-service/src/main/java/rebook/entity/PaymentDifferenceInfo.java",
                    "name": "PaymentDifferenceInfo",
                    "code": "@Data\npublic class PaymentDifferenceInfo {\n\n    private String orderId;\n\n    private String tripId;\n\n    private String userId;\n\n    private String price;\n\n    public PaymentDifferenceInfo(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "orderId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/PaymentDifferenceInfo.java",
                            "code": "private String orderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/PaymentDifferenceInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "userId",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/PaymentDifferenceInfo.java",
                            "code": "private String userId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-rebook-service/src/main/java/rebook/entity/PaymentDifferenceInfo.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "orderId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "tripId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "userId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "price",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "PriceInfo",
            "msEntities": [
                {
                    "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/PriceInfo.java",
                    "name": "PriceInfo",
                    "code": "@Data\n@NoArgsConstructor\npublic class PriceInfo {\n\n    private String id;\n\n    private String trainType;\n\n    private String routeId;\n\n    private double basicPriceRate;\n\n    private double firstClassPriceRate;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/PriceInfo.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainType",
                            "type": "String",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/PriceInfo.java",
                            "code": "private String trainType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/PriceInfo.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "basicPriceRate",
                            "type": "DOUBLE",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/PriceInfo.java",
                            "code": "private double basicPriceRate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "firstClassPriceRate",
                            "type": "DOUBLE",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/PriceInfo.java",
                            "code": "private double firstClassPriceRate;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "trainType",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "routeId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "basicPriceRate",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "firstClassPriceRate",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Station",
            "msEntities": [
                {
                    "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Station.java",
                    "name": "Station",
                    "code": "@Data\npublic class Station {\n\n    private String id;\n\n    @Valid\n    @NotNull\n    private String name;\n\n    private int stayTime;\n\n    public Station(){\n        this.name \u003d \"\";\n    }\n\n\n\n    public Station(String id, String name) {\n        this.id \u003d id;\n        this.name \u003d name;\n    }\n\n\n    public Station(String id, String name, int stayTime) {\n        this.id \u003d id;\n        this.name \u003d name;\n        this.stayTime \u003d stayTime;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Station.java",
                            "code": "private String id;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Station.java",
                            "code": "@Valid\n    @NotNull\n    private String name;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stayTime",
                            "type": "INT",
                            "path": "/ts-admin-basic-info-service/src/main/java/adminbasic/entity/Station.java",
                            "code": "private int stayTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-station-service/src/main/java/fdse/microservice/entity/Station.java",
                    "name": "Station",
                    "code": "@Data\n@Document(collection\u003d\"station\")\npublic class Station {\n    @Valid\n    @NotNull\n    @Id\n    private String id;\n\n    @Valid\n    @NotNull\n    private String name;\n\n    private int stayTime;\n\n    public Station(){\n        //Default Constructor\n        this.id \u003d UUID.randomUUID().toString();\n        this.name \u003d \"\";\n    }\n\n    public Station(String id, String name) {\n        this.id \u003d id;\n        this.name \u003d name;\n    }\n\n\n    public Station(String id, String name, int stayTime) {\n        this.id \u003d id;\n        this.name \u003d name;\n        this.stayTime \u003d stayTime;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"station\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-station-service/src/main/java/fdse/microservice/entity/Station.java",
                            "code": "@Valid\n    @NotNull\n    @Id\n    private String id;",
                            "annotations": [
                                "@Valid",
                                "@NotNull",
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "name",
                            "type": "String",
                            "path": "/ts-station-service/src/main/java/fdse/microservice/entity/Station.java",
                            "code": "@Valid\n    @NotNull\n    private String name;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stayTime",
                            "type": "INT",
                            "path": "/ts-station-service/src/main/java/fdse/microservice/entity/Station.java",
                            "code": "private int stayTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull",
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "name",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "stayTime",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "ConsignPrice",
            "msEntities": [
                {
                    "path": "/ts-consign-price-service/src/main/java/consignprice/entity/ConsignPrice.java",
                    "name": "ConsignPrice",
                    "code": "@Data\n@AllArgsConstructor\n@Document(collection \u003d \"consign_price\")\npublic class ConsignPrice {\n    @Id\n    private UUID id;\n    private int index;\n    private double initialWeight;\n    private double initialPrice;\n    private double withinPrice;\n    private double beyondPrice;\n\n    public ConsignPrice(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"consign_price\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "UUID",
                            "path": "/ts-consign-price-service/src/main/java/consignprice/entity/ConsignPrice.java",
                            "code": "@Id\n    private UUID id;",
                            "annotations": [
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "index",
                            "type": "INT",
                            "path": "/ts-consign-price-service/src/main/java/consignprice/entity/ConsignPrice.java",
                            "code": "private int index;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "initialWeight",
                            "type": "DOUBLE",
                            "path": "/ts-consign-price-service/src/main/java/consignprice/entity/ConsignPrice.java",
                            "code": "private double initialWeight;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "initialPrice",
                            "type": "DOUBLE",
                            "path": "/ts-consign-price-service/src/main/java/consignprice/entity/ConsignPrice.java",
                            "code": "private double initialPrice;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "withinPrice",
                            "type": "DOUBLE",
                            "path": "/ts-consign-price-service/src/main/java/consignprice/entity/ConsignPrice.java",
                            "code": "private double withinPrice;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "beyondPrice",
                            "type": "DOUBLE",
                            "path": "/ts-consign-price-service/src/main/java/consignprice/entity/ConsignPrice.java",
                            "code": "private double beyondPrice;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "UUID",
                    "annotationsHashSet": [
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "index",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "initialWeight",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "initialPrice",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "withinPrice",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "beyondPrice",
                    "type": "DOUBLE",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "TripInfo",
            "msEntities": [
                {
                    "path": "/ts-route-plan-service/src/main/java/plan/entity/TripInfo.java",
                    "name": "TripInfo",
                    "code": "@Data\npublic class TripInfo {\n\n    private String startingPlace;\n\n    private String endPlace;\n\n    private Date departureTime;\n\n    public TripInfo(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripInfo.java",
                            "code": "private String startingPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripInfo.java",
                            "code": "private String endPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "departureTime",
                            "type": "Date",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/TripInfo.java",
                            "code": "private Date departureTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripInfo.java",
                    "name": "TripInfo",
                    "code": "@Data\n@AllArgsConstructor\npublic class TripInfo {\n\n    private String startingPlace;\n\n    private String endPlace;\n\n    private Date departureTime;\n\n    public TripInfo() {\n        //Default Constructor\n    }\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripInfo.java",
                            "code": "private String startingPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripInfo.java",
                            "code": "private String endPlace;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "departureTime",
                            "type": "Date",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TripInfo.java",
                            "code": "private Date departureTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/TripInfo.java",
                    "name": "TripInfo",
                    "code": "@Data\n@AllArgsConstructor\npublic class TripInfo {\n    @Valid\n    @NotNull\n    private String startingPlace;\n\n    @Valid\n    @NotNull\n    private String endPlace;\n\n    @Valid\n    @NotNull\n    private Date departureTime;\n\n    public TripInfo(){\n        //Default Constructor\n        this.startingPlace \u003d \"\";\n        this.endPlace \u003d \"\";\n        this.departureTime \u003d new Date();\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripInfo.java",
                            "code": "@Valid\n    @NotNull\n    private String startingPlace;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripInfo.java",
                            "code": "@Valid\n    @NotNull\n    private String endPlace;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "departureTime",
                            "type": "Date",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TripInfo.java",
                            "code": "@Valid\n    @NotNull\n    private Date departureTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/TripInfo.java",
                    "name": "TripInfo",
                    "code": "@Data\n@AllArgsConstructor\npublic class TripInfo {\n\n    @Valid\n    @NotNull\n    private String startingPlace;\n\n    @Valid\n    @NotNull\n    private String endPlace;\n\n    @Valid\n    @NotNull\n    private Date departureTime;\n\n    public TripInfo(){\n        //Default Constructor\n        this.startingPlace \u003d \"\";\n        this.endPlace \u003d \"\";\n        this.departureTime \u003d new Date();\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "startingPlace",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripInfo.java",
                            "code": "@Valid\n    @NotNull\n    private String startingPlace;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endPlace",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripInfo.java",
                            "code": "@Valid\n    @NotNull\n    private String endPlace;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "departureTime",
                            "type": "Date",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TripInfo.java",
                            "code": "@Valid\n    @NotNull\n    private Date departureTime;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "startingPlace",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "endPlace",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "departureTime",
                    "type": "Date",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "RoutePlanInfo",
            "msEntities": [
                {
                    "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanInfo.java",
                    "name": "RoutePlanInfo",
                    "code": "@Data\npublic class RoutePlanInfo {\n\n    private String formStationName;\n\n    private String toStationName;\n\n    private Date travelDate;\n\n    private int num;\n\n    public RoutePlanInfo() {\n        //Empty Constructor\n    }\n\n    public RoutePlanInfo(String formStationName, String toStationName, Date travelDate, int num) {\n        this.formStationName \u003d formStationName;\n        this.toStationName \u003d toStationName;\n        this.travelDate \u003d travelDate;\n        this.num \u003d num;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "formStationName",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanInfo.java",
                            "code": "private String formStationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "toStationName",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanInfo.java",
                            "code": "private String toStationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanInfo.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "num",
                            "type": "INT",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanInfo.java",
                            "code": "private int num;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanInfo.java",
                    "name": "RoutePlanInfo",
                    "code": "@Data\npublic class RoutePlanInfo {\n\n    private String formStationName;\n\n    private String toStationName;\n\n    private Date travelDate;\n\n    private int num;\n\n    public RoutePlanInfo() {\n        //Empty Constructor\n    }\n\n    public RoutePlanInfo(String formStationName, String toStationName, Date travelDate, int num) {\n        this.formStationName \u003d formStationName;\n        this.toStationName \u003d toStationName;\n        this.travelDate \u003d travelDate;\n        this.num \u003d num;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "formStationName",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanInfo.java",
                            "code": "private String formStationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "toStationName",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanInfo.java",
                            "code": "private String toStationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanInfo.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "num",
                            "type": "INT",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanInfo.java",
                            "code": "private int num;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "formStationName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "toStationName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "travelDate",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "num",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "RoutePlanResultUnit",
            "msEntities": [
                {
                    "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanResultUnit.java",
                    "name": "RoutePlanResultUnit",
                    "code": "@Data\npublic class RoutePlanResultUnit {\n\n    private String tripId;\n\n    private String trainTypeId;\n\n    private String fromStationName;\n\n    private String toStationName;\n\n    private List\u003cString\u003e stopStations;\n\n    private String priceForSecondClassSeat;\n\n    private String priceForFirstClassSeat;\n\n    private Date startingTime;\n\n    private Date endTime;\n\n    public RoutePlanResultUnit() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanResultUnit.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanResultUnit.java",
                            "code": "private String trainTypeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "fromStationName",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanResultUnit.java",
                            "code": "private String fromStationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "toStationName",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanResultUnit.java",
                            "code": "private String toStationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stopStations",
                            "type": "List",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanResultUnit.java",
                            "code": "private List\u003cString\u003e stopStations;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForSecondClassSeat",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanResultUnit.java",
                            "code": "private String priceForSecondClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForFirstClassSeat",
                            "type": "String",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanResultUnit.java",
                            "code": "private String priceForFirstClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanResultUnit.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-route-plan-service/src/main/java/plan/entity/RoutePlanResultUnit.java",
                            "code": "private Date endTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "stopStations",
                            "type": "ArrayList",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanResultUnit.java",
                    "name": "RoutePlanResultUnit",
                    "code": "@Data\n@AllArgsConstructor\npublic class RoutePlanResultUnit {\n\n    private String tripId;\n\n    private String trainTypeId;\n\n    private String fromStationName;\n\n    private String toStationName;\n\n    private ArrayList\u003cString\u003e stopStations;\n\n    private String priceForSecondClassSeat;\n\n    private String priceForFirstClassSeat;\n\n    private Date startingTime;\n\n    private Date endTime;\n\n    public RoutePlanResultUnit() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanResultUnit.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanResultUnit.java",
                            "code": "private String trainTypeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "fromStationName",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanResultUnit.java",
                            "code": "private String fromStationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "toStationName",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanResultUnit.java",
                            "code": "private String toStationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stopStations",
                            "type": "ArrayList",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanResultUnit.java",
                            "code": "private ArrayList\u003cString\u003e stopStations;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForSecondClassSeat",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanResultUnit.java",
                            "code": "private String priceForSecondClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForFirstClassSeat",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanResultUnit.java",
                            "code": "private String priceForFirstClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanResultUnit.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/RoutePlanResultUnit.java",
                            "code": "private Date endTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "stopStations",
                            "type": "List",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                }
            ],
            "uniqueFields": [
                {
                    "name": "tripId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "trainTypeId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "fromStationName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "toStationName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "stopStations",
                    "type": "List",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "priceForSecondClassSeat",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "priceForFirstClassSeat",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "startingTime",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "endTime",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "stopStations",
                    "type": "ArrayList",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Payment",
            "msEntities": [
                {
                    "path": "/ts-payment-service/src/main/java/com/trainticket/entity/Payment.java",
                    "name": "Payment",
                    "code": "@Data\n@Document(collection\u003d\"payment\")\npublic class Payment {\n    @Id\n    @NotNull\n    @Valid\n    private String id;\n\n    @NotNull\n    @Valid\n    private String orderId;\n\n    @NotNull\n    @Valid\n    private String userId;\n\n    @NotNull\n    @Valid\n    private String price;\n\n    public Payment(){\n        this.id \u003d UUID.randomUUID().toString().replace(\"-\", \"\").toUpperCase();\n        this.orderId \u003d \"\";\n        this.userId \u003d \"\";\n        this.price \u003d \"\";\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"payment\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-payment-service/src/main/java/com/trainticket/entity/Payment.java",
                            "code": "@Id\n    @NotNull\n    @Valid\n    private String id;",
                            "annotations": [
                                "@Id",
                                "@NotNull",
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "String",
                            "path": "/ts-payment-service/src/main/java/com/trainticket/entity/Payment.java",
                            "code": "@NotNull\n    @Valid\n    private String orderId;",
                            "annotations": [
                                "@NotNull",
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "userId",
                            "type": "String",
                            "path": "/ts-payment-service/src/main/java/com/trainticket/entity/Payment.java",
                            "code": "@NotNull\n    @Valid\n    private String userId;",
                            "annotations": [
                                "@NotNull",
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-payment-service/src/main/java/com/trainticket/entity/Payment.java",
                            "code": "@NotNull\n    @Valid\n    private String price;",
                            "annotations": [
                                "@NotNull",
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "type",
                            "type": "PaymentType",
                            "annotationsHashSet": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Payment.java",
                    "name": "Payment",
                    "code": "@Data\n@Document(collection\u003d\"payment\")\npublic class Payment {\n    @Id\n    @NotNull\n    @Valid\n    private String id;\n\n    @NotNull\n    @Valid\n    private String orderId;\n\n    @NotNull\n    @Valid\n    private String userId;\n\n    @NotNull\n    @Valid\n    private String price;\n\n    @NotNull\n    @Valid\n    private PaymentType type;\n\n    public Payment(){\n        this.id \u003d UUID.randomUUID().toString().replace(\"-\", \"\").toUpperCase();\n        this.orderId \u003d \"\";\n        this.userId \u003d \"\";\n        this.price \u003d \"\";\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"payment\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Payment.java",
                            "code": "@Id\n    @NotNull\n    @Valid\n    private String id;",
                            "annotations": [
                                "@Id",
                                "@NotNull",
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Payment.java",
                            "code": "@NotNull\n    @Valid\n    private String orderId;",
                            "annotations": [
                                "@NotNull",
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "userId",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Payment.java",
                            "code": "@NotNull\n    @Valid\n    private String userId;",
                            "annotations": [
                                "@NotNull",
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Payment.java",
                            "code": "@NotNull\n    @Valid\n    private String price;",
                            "annotations": [
                                "@NotNull",
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "type",
                            "type": "PaymentType",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Payment.java",
                            "code": "@NotNull\n    @Valid\n    private PaymentType type;",
                            "annotations": [
                                "@NotNull",
                                "@Valid"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "id",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull",
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "orderId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "userId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "price",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "type",
                    "type": "PaymentType",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Money",
            "msEntities": [
                {
                    "path": "/ts-payment-service/src/main/java/com/trainticket/entity/Money.java",
                    "name": "Money",
                    "code": "@Data\n@AllArgsConstructor\n@Document(collection\u003d\"addMoney\")\npublic class Money {\n    private String userId;\n    private String money; //NOSONAR\n\n    public Money(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"addMoney\"",
                    "fields": [
                        {
                            "name": "userId",
                            "type": "String",
                            "path": "/ts-payment-service/src/main/java/com/trainticket/entity/Money.java",
                            "code": "private String userId;",
                            "annotations": [],
                            "missingAnnotations": [
                                "@Valid",
                                "@NotNull"
                            ]
                        },
                        {
                            "name": "money",
                            "type": "String",
                            "path": "/ts-payment-service/src/main/java/com/trainticket/entity/Money.java",
                            "code": "private String money;",
                            "annotations": [],
                            "missingAnnotations": [
                                "@Valid",
                                "@NotNull"
                            ]
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "id",
                            "type": "String",
                            "annotationsHashSet": [
                                "@Valid",
                                "@NotNull",
                                "@Id"
                            ],
                            "annotationList": []
                        },
                        {
                            "name": "type",
                            "type": "MoneyType",
                            "annotationsHashSet": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": true,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Money.java",
                    "name": "Money",
                    "code": "@Data\n@Document(collection\u003d\"addMoney\")\npublic class Money {\n\n    @Valid\n    @NotNull\n    @Id\n    private String id;\n\n    @Valid\n    @NotNull\n    private String userId;\n\n    @Valid\n    @NotNull\n    private String money; //NOSONAR\n\n    @Valid\n    @NotNull\n    private MoneyType type;\n\n    public Money(){\n        this.id \u003d UUID.randomUUID().toString();\n        this.userId \u003d \"\";\n        this.money \u003d \"\";\n\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "document": "Document",
                    "collectionName": "\"addMoney\"",
                    "fields": [
                        {
                            "name": "id",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Money.java",
                            "code": "@Valid\n    @NotNull\n    @Id\n    private String id;",
                            "annotations": [
                                "@Valid",
                                "@NotNull",
                                "@Id"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "userId",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Money.java",
                            "code": "@Valid\n    @NotNull\n    private String userId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "money",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Money.java",
                            "code": "@Valid\n    @NotNull\n    private String money;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "type",
                            "type": "MoneyType",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Money.java",
                            "code": "@Valid\n    @NotNull\n    private MoneyType type;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "userId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "money",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "id",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull",
                        "@Id"
                    ],
                    "annotationList": []
                },
                {
                    "name": "type",
                    "type": "MoneyType",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": true
        },
        {
            "name": "OutsidePaymentInfo",
            "msEntities": [
                {
                    "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/OutsidePaymentInfo.java",
                    "name": "OutsidePaymentInfo",
                    "code": "@Data\npublic class OutsidePaymentInfo {\n    public OutsidePaymentInfo(){\n        //Default Constructor\n    }\n\n    private String orderId;\n    private String price;\n    private String userId;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "orderId",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/OutsidePaymentInfo.java",
                            "code": "private String orderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/OutsidePaymentInfo.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "userId",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/OutsidePaymentInfo.java",
                            "code": "private String userId;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "orderId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "price",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "userId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "PaymentInfo",
            "msEntities": [
                {
                    "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/PaymentInfo.java",
                    "name": "PaymentInfo",
                    "code": "@Data\n@AllArgsConstructor\npublic class PaymentInfo {\n    public PaymentInfo(){\n        //Default Constructor\n    }\n\n    private String userId;\n    private String orderId;\n    private String tripId;\n    private String price;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "userId",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/PaymentInfo.java",
                            "code": "private String userId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "orderId",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/PaymentInfo.java",
                            "code": "private String orderId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/PaymentInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "price",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/PaymentInfo.java",
                            "code": "private String price;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "userId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "orderId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "tripId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "price",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "Balance",
            "msEntities": [
                {
                    "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Balance.java",
                    "name": "Balance",
                    "code": "@Data\npublic class Balance {\n    @Valid\n    @NotNull\n    private String userId;\n\n    @Valid\n    @NotNull\n    private String balance; //NOSONAR\n\n    public Balance(){\n        //Default Constructor\n        this.userId \u003d \"\";\n        this.balance \u003d \"\";\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "userId",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Balance.java",
                            "code": "@Valid\n    @NotNull\n    private String userId;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        },
                        {
                            "name": "balance",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/Balance.java",
                            "code": "@Valid\n    @NotNull\n    private String balance;",
                            "annotations": [
                                "@Valid",
                                "@NotNull"
                            ],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "userId",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                },
                {
                    "name": "balance",
                    "type": "String",
                    "annotationsHashSet": [
                        "@Valid",
                        "@NotNull"
                    ],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "AccountInfo",
            "msEntities": [
                {
                    "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/AccountInfo.java",
                    "name": "AccountInfo",
                    "code": "@Data\npublic class AccountInfo {\n\n    private String userId;\n\n    private String money;\n\n    public AccountInfo(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "userId",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/AccountInfo.java",
                            "code": "private String userId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "money",
                            "type": "String",
                            "path": "/ts-inside-payment-service/src/main/java/inside_payment/entity/AccountInfo.java",
                            "code": "private String money;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "userId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "money",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "TransferTravelResult",
            "msEntities": [
                {
                    "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TransferTravelResult.java",
                    "name": "TransferTravelResult",
                    "code": "@Data\npublic class TransferTravelResult {\n\n    private List\u003cTripResponse\u003e firstSectionResult;\n\n    private List\u003cTripResponse\u003e secondSectionResult;\n\n    public TransferTravelResult() {\n        //Default Constructor\n    }\n\n    public TransferTravelResult(List\u003cTripResponse\u003e firstSectionResult, List\u003cTripResponse\u003e secondSectionResult) {\n\n        this.firstSectionResult \u003d firstSectionResult;\n        this.secondSectionResult \u003d secondSectionResult;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "firstSectionResult",
                            "type": "List",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TransferTravelResult.java",
                            "code": "private List\u003cTripResponse\u003e firstSectionResult;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "secondSectionResult",
                            "type": "List",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TransferTravelResult.java",
                            "code": "private List\u003cTripResponse\u003e secondSectionResult;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "firstSectionResult",
                    "type": "List",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "secondSectionResult",
                    "type": "List",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "TravelAdvanceResultUnit",
            "msEntities": [
                {
                    "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TravelAdvanceResultUnit.java",
                    "name": "TravelAdvanceResultUnit",
                    "code": "@Data\npublic class TravelAdvanceResultUnit {\n\n    private String tripId;\n\n    private String trainTypeId;\n\n    private String fromStationName;\n\n    private String toStationName;\n\n    private List\u003cString\u003e stopStations;\n\n    private String priceForSecondClassSeat;\n\n    private int numberOfRestTicketSecondClass;\n\n    private String priceForFirstClassSeat;\n\n    private int numberOfRestTicketFirstClass;\n\n    private Date startingTime;\n\n    private Date endTime;\n\n    public TravelAdvanceResultUnit() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TravelAdvanceResultUnit.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TravelAdvanceResultUnit.java",
                            "code": "private String trainTypeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "fromStationName",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TravelAdvanceResultUnit.java",
                            "code": "private String fromStationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "toStationName",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TravelAdvanceResultUnit.java",
                            "code": "private String toStationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stopStations",
                            "type": "List",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TravelAdvanceResultUnit.java",
                            "code": "private List\u003cString\u003e stopStations;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForSecondClassSeat",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TravelAdvanceResultUnit.java",
                            "code": "private String priceForSecondClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "numberOfRestTicketSecondClass",
                            "type": "INT",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TravelAdvanceResultUnit.java",
                            "code": "private int numberOfRestTicketSecondClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "priceForFirstClassSeat",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TravelAdvanceResultUnit.java",
                            "code": "private String priceForFirstClassSeat;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "numberOfRestTicketFirstClass",
                            "type": "INT",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TravelAdvanceResultUnit.java",
                            "code": "private int numberOfRestTicketFirstClass;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TravelAdvanceResultUnit.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TravelAdvanceResultUnit.java",
                            "code": "private Date endTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "tripId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "trainTypeId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "fromStationName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "toStationName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "stopStations",
                    "type": "List",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "priceForSecondClassSeat",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "numberOfRestTicketSecondClass",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "priceForFirstClassSeat",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "numberOfRestTicketFirstClass",
                    "type": "INT",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "startingTime",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "endTime",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "TransferTravelInfo",
            "msEntities": [
                {
                    "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TransferTravelInfo.java",
                    "name": "TransferTravelInfo",
                    "code": "@Data\npublic class TransferTravelInfo {\n\n    private String fromStationName;\n\n    private String viaStationName;\n\n    private String toStationName;\n\n    private Date travelDate;\n\n    private String trainType;\n\n    public TransferTravelInfo() {\n        //Empty Constructor\n    }\n\n    public TransferTravelInfo(String fromStationName, String viaStationName, String toStationName, Date travelDate, String trainType) {\n        this.fromStationName \u003d fromStationName;\n        this.viaStationName \u003d viaStationName;\n        this.toStationName \u003d toStationName;\n        this.travelDate \u003d travelDate;\n        this.trainType \u003d trainType;\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "fromStationName",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TransferTravelInfo.java",
                            "code": "private String fromStationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "viaStationName",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TransferTravelInfo.java",
                            "code": "private String viaStationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "toStationName",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TransferTravelInfo.java",
                            "code": "private String toStationName;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "travelDate",
                            "type": "Date",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TransferTravelInfo.java",
                            "code": "private Date travelDate;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainType",
                            "type": "String",
                            "path": "/ts-travel-plan-service/src/main/java/travelplan/entity/TransferTravelInfo.java",
                            "code": "private String trainType;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "fromStationName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "viaStationName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "toStationName",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "travelDate",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "trainType",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "TravelInfo",
            "msEntities": [
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelInfo.java",
                    "name": "TravelInfo",
                    "code": "@Data\npublic class TravelInfo {\n\n    private String tripId;\n\n    private String trainTypeId;\n\n    private String routeId;\n\n    private String startingStationId;\n\n    private String stationsId;\n\n    private String terminalStationId;\n\n    private Date startingTime;\n\n    private Date endTime;\n\n    public TravelInfo() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelInfo.java",
                            "code": "private String trainTypeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelInfo.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStationId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelInfo.java",
                            "code": "private String startingStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationsId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelInfo.java",
                            "code": "private String stationsId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelInfo.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelInfo.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/TravelInfo.java",
                            "code": "private Date endTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "loginId",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/TravelInfo.java",
                    "name": "TravelInfo",
                    "code": "@Data\npublic class TravelInfo {\n\n    private String tripId;\n\n    private String trainTypeId;\n\n    private String routeId;\n\n    private String startingStationId;\n\n    private String stationsId;\n\n    private String terminalStationId;\n\n    private Date startingTime;\n\n    private Date endTime;\n\n    public TravelInfo() {\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TravelInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TravelInfo.java",
                            "code": "private String trainTypeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TravelInfo.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStationId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TravelInfo.java",
                            "code": "private String startingStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationsId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TravelInfo.java",
                            "code": "private String stationsId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TravelInfo.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TravelInfo.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-travel-service/src/main/java/travel/entity/TravelInfo.java",
                            "code": "private Date endTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [
                        {
                            "name": "loginId",
                            "type": "String",
                            "annotationsHashSet": [],
                            "annotationList": []
                        }
                    ],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": true
                },
                {
                    "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TravelInfo.java",
                    "name": "TravelInfo",
                    "code": "@Data\n@NoArgsConstructor\n@AllArgsConstructor\npublic class TravelInfo {\n    private String loginId;\n\n    private String tripId;\n\n    private String trainTypeId;\n\n    private String routeId;\n\n    private String startingStationId;\n\n    private String stationsId;\n\n    private String terminalStationId;\n\n    private Date startingTime;\n\n    private Date endTime;\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "loginId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TravelInfo.java",
                            "code": "private String loginId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "tripId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TravelInfo.java",
                            "code": "private String tripId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainTypeId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TravelInfo.java",
                            "code": "private String trainTypeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "routeId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TravelInfo.java",
                            "code": "private String routeId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingStationId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TravelInfo.java",
                            "code": "private String startingStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "stationsId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TravelInfo.java",
                            "code": "private String stationsId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "terminalStationId",
                            "type": "String",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TravelInfo.java",
                            "code": "private String terminalStationId;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "startingTime",
                            "type": "Date",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TravelInfo.java",
                            "code": "private Date startingTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "endTime",
                            "type": "Date",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/TravelInfo.java",
                            "code": "private Date endTime;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "tripId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "trainTypeId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "routeId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "startingStationId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "stationsId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "terminalStationId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "startingTime",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "endTime",
                    "type": "Date",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "loginId",
                    "type": "String",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        },
        {
            "name": "AdminTrip",
            "msEntities": [
                {
                    "path": "/ts-travel2-service/src/main/java/travel2/entity/AdminTrip.java",
                    "name": "AdminTrip",
                    "code": "@Data\npublic class AdminTrip {\n    private Trip trip;\n    private TrainType trainType;\n    private Route route;\n\n    public AdminTrip(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/AdminTrip.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainType",
                            "type": "TrainType",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/AdminTrip.java",
                            "code": "private TrainType trainType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "route",
                            "type": "Route",
                            "path": "/ts-travel2-service/src/main/java/travel2/entity/AdminTrip.java",
                            "code": "private Route route;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-travel-service/src/main/java/travel/entity/AdminTrip.java",
                    "name": "AdminTrip",
                    "code": "@Data\npublic class AdminTrip {\n    private Trip trip;\n    private TrainType trainType;\n    private Route route;\n\n    public AdminTrip(){\n        //Default Constructor\n    }\n\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-travel-service/src/main/java/travel/entity/AdminTrip.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainType",
                            "type": "TrainType",
                            "path": "/ts-travel-service/src/main/java/travel/entity/AdminTrip.java",
                            "code": "private TrainType trainType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "route",
                            "type": "Route",
                            "path": "/ts-travel-service/src/main/java/travel/entity/AdminTrip.java",
                            "code": "private Route route;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                },
                {
                    "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/AdminTrip.java",
                    "name": "AdminTrip",
                    "code": "@Data\n@NoArgsConstructor\npublic class AdminTrip {\n    private Trip trip;\n    private TrainType trainType;\n    private Route route;\n}",
                    "isEnum": false,
                    "data": "Data",
                    "fields": [
                        {
                            "name": "trip",
                            "type": "Trip",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/AdminTrip.java",
                            "code": "private Trip trip;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "trainType",
                            "type": "TrainType",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/AdminTrip.java",
                            "code": "private TrainType trainType;",
                            "annotations": [],
                            "missingAnnotations": []
                        },
                        {
                            "name": "route",
                            "type": "Route",
                            "path": "/ts-admin-travel-service/src/main/java/admintravel/entity/AdminTrip.java",
                            "code": "private Route route;",
                            "annotations": [],
                            "missingAnnotations": []
                        }
                    ],
                    "missingFields": [],
                    "hasMissingFiledAnnotations": false,
                    "hasMissingField": false
                }
            ],
            "uniqueFields": [
                {
                    "name": "trip",
                    "type": "Trip",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "trainType",
                    "type": "TrainType",
                    "annotationsHashSet": [],
                    "annotationList": []
                },
                {
                    "name": "route",
                    "type": "Route",
                    "annotationsHashSet": [],
                    "annotationList": []
                }
            ],
            "hasMissingFiledAnnotations": false
        }
    ]

    // const getData = () => {
    //     fetch('./entityClusterList.json', {
    //         headers : {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'
    //         }
    //     }).then(function (response){
    //         console.log(response)
    //     })
    // }

    useEffect(()=> {
        // getData();
    })

    return (
        <div>
            <AppHeader/>
            <div className={classes.content}>
                {/*<AllSummary metadata={data.metadata}/>*/}
                {/*<CodeCloneList cloneList={data.codeClones} />*/}
                <InconsistencyList inconsistencyList={inconsistencies} />
            </div>
        </div>
    )
}
export default CCApp;