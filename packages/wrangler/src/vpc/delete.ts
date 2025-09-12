import { createCommand } from "../core/create-command";
import { logger } from "../logger";
import { deleteService } from "./client";

export const vpcServiceDeleteCommand = createCommand({
	metadata: {
		description: "Delete a VPC connectivity service",
		status: "stable",
		owner: "Product: WVPC",
	},
	args: {
		"service-id": {
			type: "string",
			demandOption: true,
			description: "The ID of the connectivity service to delete",
		},
	},
	positionalArgs: ["service-id"],
	async handler(args, { config }) {
		logger.log(`🗑️  Deleting VPC connectivity service '${args.serviceId}'`);

		await deleteService(config, args.serviceId);

		logger.log(`✅ Deleted VPC connectivity service: ${args.serviceId}`);
	},
});
