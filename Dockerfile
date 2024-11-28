FROM maven AS build

RUN mvn -version

WORKDIR /app

COPY backend/pom.xml /app/

COPY backend/src /app/src

RUN mvn clean package -X

FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=build /app/target/badcourt.jar /app/badcourt.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "badcourt.jar"]
