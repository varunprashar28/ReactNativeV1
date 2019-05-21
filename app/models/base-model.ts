
export interface BaseModelData {
  Id?: number
}

export class BaseModel {
  Id?: number

  constructor(data?: BaseModelData) {
    if (data) {
      this.Id = data.Id
    }
  }

}
