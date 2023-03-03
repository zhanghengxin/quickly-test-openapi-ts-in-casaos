https://gitee.com/icewhale-team/CasaOS-LocalStorage/raw/main/api/local_storage/openapi.yaml

after install openapi-generator-cli was executed
openapi-generator-cli generate -g typescript-axios -i ./openapi.yaml -o ./codegen/local_storage

project:In CasaOS-LocalStorage was executed
npx @openapitools/openapi-generator-cli generate -g typescript-axios -i ./openapi.yaml -o ./codegen/local_storage




----

openapi-generator-cli generate -g typescript-axios -i ./api_schema/reference/sample_api.v1.yaml -o ./types/typescript-axios


-----
npx @openapitools/openapi-generator-cli generate -g typescript-axios -i https://raw.githubusercontent.com/IceWhaleTech/CasaOS-AppManagement/main/api/app_management/openapi.yaml -o ./src/codegen/app_management
