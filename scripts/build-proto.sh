protoc \
--plugin=./node_modules/.bin/protoc-gen-ts_proto \
--ts_proto_opt=env=node,forceLong=long,outputEncodeMethods=false,outputJsonMethods=false,outputClientImpl=false \
--proto_path=src/proto \
--ts_proto_out=./src/protoTypes \
./src/proto/*.proto
# --ts_proto_opt=context=true \
