/* eslint-disable */


export interface ReadAllRequest {
}

export interface ReadAllResponse {
  cats: Cat[];
}

export interface ReadRequest {
  id: string;
}

export interface ReadResponse {
  cat: Cat | undefined;
}

export interface CreateRequest {
  cat: Cat | undefined;
}

export interface CreateResponse {
  cat: Cat | undefined;
}

export interface UpdateRequest {
  cat: Cat | undefined;
}

export interface UpdateResponse {
  cat: Cat | undefined;
}

export interface DeleteRequest {
  id: string;
}

export interface DeleteResponse {
  deleted: boolean;
}

export interface Cat {
  id: string;
  name: string;
  color: string;
}

export interface CatService {

  ReadAll(request: ReadAllRequest): Promise<ReadAllResponse>;

  Read(request: ReadRequest): Promise<ReadResponse>;

  Create(request: CreateRequest): Promise<CreateResponse>;

  Update(request: UpdateRequest): Promise<UpdateResponse>;

  Delete(request: DeleteRequest): Promise<DeleteResponse>;

}
