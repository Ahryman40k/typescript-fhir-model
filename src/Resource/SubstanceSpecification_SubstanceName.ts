
        import { CodeableConcept } from '../Resource/CodeableConcept';
import { Element } from '../Resource/Element';
import { Extension } from '../Resource/Extension';
import { SubstanceSpecification_OfficialName } from '../Resource/SubstanceSpecification_OfficialName';

        

        /**
         * The detailed description of a substance, typically at a level beyond what is used for prescribing. 
         */
        export class SubstanceSpecification_SubstanceName  {

            constructor() {
                
            }

            
                /**
                 * Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.
                 */
                id? : string;
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.
                 */
                extension? : Extension[];
                

                /**
                 * May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself).
                 */
                modifierExtension? : Extension[];
                

                /**
                 * The actual name.
                 */
                name? : string;
                

                /**
                 * Extensions for name
                 */
                _name? : Element;
                

                /**
                 * Name type.
                 */
                type? : CodeableConcept;
                

                /**
                 * Language of the name.
                 */
                language? : CodeableConcept[];
                

                /**
                 * The use context of this name for example if there is a different name a drug active ingredient as opposed to a food colour additive.
                 */
                domain? : CodeableConcept[];
                

                /**
                 * The jurisdiction where this name applies.
                 */
                jurisdiction? : CodeableConcept[];
                

                /**
                 * Details of the official nature of this name.
                 */
                officialName? : SubstanceSpecification_OfficialName[];
                

                /**
                 * Supporting literature.
                 */
                referenceSource? : String[];
                

                /**
                 * Extensions for referenceSource
                 */
                _referenceSource? : Element[];
                
        }
        