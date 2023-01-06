import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("specifications")
class Specification {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    // constructor é uma função que é chamada toda vez que
    // a classe é instanceada
    if (!this.id) {
      this.id = uuidv4();
      // this se refere ao própio objeto
    }
  }
}

export { Specification };
