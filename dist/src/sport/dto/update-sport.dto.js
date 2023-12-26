"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSportDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_sport_dto_1 = require("./create-sport.dto");
class UpdateSportDto extends (0, mapped_types_1.PartialType)(create_sport_dto_1.CreateSportDto) {
}
exports.UpdateSportDto = UpdateSportDto;
//# sourceMappingURL=update-sport.dto.js.map